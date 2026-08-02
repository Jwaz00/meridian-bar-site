/* =========================================================
   Paste your own project's values here — find them in your
   Supabase dashboard under Project Settings > API.
   ========================================================= */
const SUPABASE_URL = "https://wrfnhvauxnkdnsnzswcc.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZm5odmF1eG5rZG5zbnpzd2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2MjA1MjQsImV4cCI6MjEwMTE5NjUyNH0.iLkrVwQDQtXAyKFPJv17nyjrjxzD4J3SnInSJpwlGps";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getSession() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  return session;
}

// Call at the top of any page that requires login. Redirects if not signed in.
async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

async function signOut() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}

// Ensures a profiles row exists for a newly-created user.
async function ensureProfile(userId) {
  const { data } = await supabaseClient.from("profiles").select("id").eq("id", userId).maybeSingle();
  if (!data) {
    await supabaseClient.from("profiles").insert({ id: userId });
  }
}
