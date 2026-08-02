let currentUser = null;

async function initDashboard() {
  const session = await requireAuth();
  if (!session) return;
  currentUser = session.user;

  document.getElementById("user-email").textContent = currentUser.email;

  await loadTestDate();
  await loadTodos();
  await loadSubjectTracker();

  document.getElementById("set-date-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const date = document.getElementById("test-date-input").value;
    if (!date) return;
    await supabaseClient.from("profiles").update({ test_date: date }).eq("id", currentUser.id);
    renderCountdown(date);
  });

  document.getElementById("todo-add-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("todo-input");
    const task = input.value.trim();
    if (!task) return;
    await supabaseClient.from("todos").insert({ user_id: currentUser.id, task });
    input.value = "";
    await loadTodos();
  });

  document.getElementById("logout-btn").addEventListener("click", signOut);
}

async function loadTestDate() {
  const { data } = await supabaseClient.from("profiles").select("test_date").eq("id", currentUser.id).maybeSingle();
  const dateVal = data && data.test_date;
  if (dateVal) {
    document.getElementById("test-date-input").value = dateVal;
    renderCountdown(dateVal);
  } else {
    renderCountdown(null);
  }
}

function renderCountdown(dateStr) {
  const box = document.getElementById("countdown-box");
  if (!dateStr) {
    box.innerHTML = `<p class="empty-note">Set your exam date below to start the countdown.</p>`;
    return;
  }
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  const diffMs = target - now;
  const days = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  const weeks = Math.floor(days / 7);
  const remDays = days % 7;

  box.innerHTML = `
    <div class="countdown">
      <div class="unit"><div class="num">${days}</div><div class="label">Days left</div></div>
      <div class="unit"><div class="num">${weeks}</div><div class="label">Full weeks</div></div>
      <div class="unit"><div class="num">${remDays}</div><div class="label">Extra days</div></div>
    </div>
  `;
}

async function loadTodos() {
  const { data: todos } = await supabaseClient
    .from("todos")
    .select("*")
    .eq("user_id", currentUser.id)
    .order("created_at", { ascending: true });

  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  if (!todos || todos.length === 0) {
    list.innerHTML = `<p class="empty-note">No to-dos yet — add your first study task above.</p>`;
    return;
  }
  todos.forEach(t => {
    const li = document.createElement("li");
    li.className = "todo-item" + (t.done ? " done" : "");
    li.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} data-id="${t.id}">
      <span class="todo-text">${escapeHtml(t.task)}</span>
      <button class="todo-del" data-id="${t.id}" aria-label="Delete">✕</button>
    `;
    list.appendChild(li);
  });

  list.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", async () => {
      await supabaseClient.from("todos").update({ done: cb.checked }).eq("id", cb.dataset.id);
      await loadTodos();
    });
  });
  list.querySelectorAll(".todo-del").forEach(btn => {
    btn.addEventListener("click", async () => {
      await supabaseClient.from("todos").delete().eq("id", btn.dataset.id);
      await loadTodos();
    });
  });
}

async function loadSubjectTracker() {
  const { data: attempts } = await supabaseClient
    .from("question_attempts")
    .select("subject, correct")
    .eq("user_id", currentUser.id);

  const container = document.getElementById("subject-tracker");
  const allSubjects = [...new Set([...MBE_QUESTIONS, ...MEE_QUESTIONS].map(q => q.subject))];

  if (!attempts || attempts.length === 0) {
    container.innerHTML = `<p class="empty-note">Answer some practice questions to see your subject breakdown here.</p>`;
    return;
  }

  const stats = {};
  allSubjects.forEach(s => (stats[s] = { correct: 0, total: 0 }));
  attempts.forEach(a => {
    if (!stats[a.subject]) stats[a.subject] = { correct: 0, total: 0 };
    stats[a.subject].total += 1;
    if (a.correct) stats[a.subject].correct += 1;
  });

  const rows = Object.entries(stats)
    .filter(([, v]) => v.total > 0)
    .map(([subject, v]) => ({ subject, pct: Math.round((v.correct / v.total) * 100), ...v }))
    .sort((a, b) => a.pct - b.pct);

  container.innerHTML = rows.map(r => {
    const cls = r.pct >= 75 ? "good" : r.pct >= 50 ? "warn" : "risk";
    return `
      <div class="subject-row">
        <div class="row-top">
          <span>${escapeHtml(r.subject)}</span>
          <span class="pct">${r.pct}%</span>
        </div>
        <div class="bar-track"><div class="bar-fill ${cls}" style="width:${r.pct}%"></div></div>
        <div class="count">${r.correct}/${r.total} correct</div>
      </div>
    `;
  }).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", initDashboard);
