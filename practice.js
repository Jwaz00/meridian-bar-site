let currentUser = null;
let activeType = "mbe";
let activeSubject = "All";
let currentList = [];
let currentIndex = 0;
let selectedChoice = null;
let answered = false;

async function initPractice() {
  const session = await requireAuth();
  if (!session) return;
  currentUser = session.user;
  document.getElementById("user-email").textContent = currentUser.email;
  document.getElementById("logout-btn").addEventListener("click", signOut);

  buildSubjectFilter();
  loadList();
  renderQuestion();

  document.getElementById("type-mbe").addEventListener("click", () => {
    activeType = "mbe"; activeSubject = "All";
    buildSubjectFilter(); loadList(); renderQuestion();
  });
  document.getElementById("type-mee").addEventListener("click", () => {
    activeType = "mee"; activeSubject = "All";
    buildSubjectFilter(); loadList(); renderQuestion();
  });
}

function currentBank() {
  return activeType === "mbe" ? MBE_QUESTIONS : MEE_QUESTIONS;
}

function loadList() {
  currentList = currentBank().filter(q => activeSubject === "All" || q.subject === activeSubject);
  currentIndex = 0;
  selectedChoice = null;
  answered = false;
}

function buildSubjectFilter() {
  const subjects = ["All", ...new Set(currentBank().map(q => q.subject))];
  const container = document.getElementById("subject-filter");
  container.innerHTML = subjects.map(s =>
    `<button class="chip ${s === activeSubject ? "active" : ""}" data-subject="${escapeAttr(s)}">${escapeHtml(s)}</button>`
  ).join("");

  document.getElementById("type-mbe").classList.toggle("active", activeType === "mbe");
  document.getElementById("type-mee").classList.toggle("active", activeType === "mee");

  container.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      activeSubject = chip.dataset.subject;
      buildSubjectFilter();
      loadList();
      renderQuestion();
    });
  });
}

function renderQuestion() {
  const stage = document.getElementById("question-stage");
  if (currentList.length === 0) {
    stage.innerHTML = `<p class="empty-note">No questions in this subject yet.</p>`;
    return;
  }
  const q = currentList[currentIndex];
  stage.innerHTML = activeType === "mbe" ? renderMbeCard(q) : renderMeeCard(q);

  if (activeType === "mbe") attachMbeHandlers(q);
  else attachMeeHandlers(q);
}

/* ---------------- MBE: select -> submit -> glow -> explain -> next ---------------- */
function renderMbeCard(q) {
  return `
    <div class="q-progress" style="margin-bottom: 10px;">Question ${currentIndex + 1} of ${currentList.length}</div>
    <div class="question-card">
      <div class="subject-label">${escapeHtml(q.subject)} · MBE-style</div>
      <div class="prompt">${escapeHtml(q.prompt)}</div>
      <div class="choice-list" id="choice-list">
        ${q.choices.map((c, i) => `
          <div class="choice" data-index="${i}">
            <span class="letter">${String.fromCharCode(65 + i)}.</span>
            <span>${escapeHtml(c)}</span>
          </div>
        `).join("")}
      </div>
      <div class="q-actions">
        <button class="btn btn-primary" id="submit-btn" disabled>Submit answer</button>
        <button class="btn btn-ghost" id="next-btn" style="display:none;">Next question →</button>
      </div>
      <div class="explanation" id="explanation"></div>
    </div>
  `;
}

function attachMbeHandlers(q) {
  selectedChoice = null;
  answered = false;
  const choices = document.querySelectorAll("#choice-list .choice");
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");

  choices.forEach(choiceEl => {
    choiceEl.addEventListener("click", () => {
      if (answered) return;
      choices.forEach(c => c.classList.remove("selected"));
      choiceEl.classList.add("selected");
      selectedChoice = parseInt(choiceEl.dataset.index, 10);
      submitBtn.disabled = false;
    });
  });

  submitBtn.addEventListener("click", async () => {
    if (selectedChoice === null || answered) return;
    answered = true;
    const isCorrect = selectedChoice === q.correct;

    choices.forEach(c => c.classList.add("disabled"));
    choices[q.correct].classList.add("correct", "glow");
    if (!isCorrect) {
      choices[selectedChoice].classList.add("incorrect");
    }

    const explain = document.getElementById("explanation");
    explain.innerHTML = `
      <div class="verdict ${isCorrect ? "correct" : "incorrect"}">${isCorrect ? "Correct!" : "Not quite."} The right answer is ${String.fromCharCode(65 + q.correct)}.</div>
      <ul class="explain-list">
        ${q.explanations.map((ex, i) => `
          <li class="${i === q.correct ? "is-correct" : ""}">
            <span class="letter">${String.fromCharCode(65 + i)}.</span> ${escapeHtml(ex)}
          </li>
        `).join("")}
      </ul>
    `;
    explain.classList.add("show");

    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-flex";

    await supabaseClient.from("question_attempts").insert({
      user_id: currentUser.id,
      subject: q.subject,
      question_id: q.id,
      correct: isCorrect
    });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentList.length;
    renderQuestion();
  });
}

/* ---------------- MEE: essay prompt -> reveal checklist -> self-grade -> next ---------------- */
function renderMeeCard(q) {
  return `
    <div class="q-progress" style="margin-bottom: 10px;">Question ${currentIndex + 1} of ${currentList.length}</div>
    <div class="question-card">
      <div class="subject-label">${escapeHtml(q.subject)} · MEE-style essay</div>
      <div class="prompt">${escapeHtml(q.prompt)}</div>
      <p style="font-size: 0.82rem; margin-bottom: 10px;">Write or outline your answer, then check it against the issues a strong response should spot:</p>
      <ul class="checklist">
        ${q.checklist.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <div class="self-grade" id="self-grade">
        <button class="btn btn-primary btn-sm" data-result="true">I got the key issues</button>
        <button class="btn btn-ghost btn-sm" data-result="false">I need to review this</button>
      </div>
      <div class="q-actions" style="margin-top: 18px;">
        <span class="msg success" id="grade-msg" style="display:none;">Logged — check your dashboard's subject tracker.</span>
        <button class="btn btn-ghost" id="next-btn-mee" style="display:none;">Next question →</button>
      </div>
    </div>
  `;
}

function attachMeeHandlers(q) {
  document.querySelectorAll("#self-grade button").forEach(btn => {
    btn.addEventListener("click", async () => {
      const correct = btn.dataset.result === "true";
      document.querySelectorAll("#self-grade button").forEach(b => (b.disabled = true));
      document.getElementById("grade-msg").style.display = "inline";
      document.getElementById("next-btn-mee").style.display = "inline-flex";

      await supabaseClient.from("question_attempts").insert({
        user_id: currentUser.id,
        subject: q.subject,
        question_id: q.id,
        correct
      });
    });
  });

  document.getElementById("next-btn-mee").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentList.length;
    renderQuestion();
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
function escapeAttr(str) {
  return str.replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", initPractice);
