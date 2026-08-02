# Docket — Bar Prep Tracker: Setup

This app needs a free Supabase project to handle accounts and store your data. Takes about 5 minutes, one time.

## 1. Create a Supabase project
1. Go to https://supabase.com and sign up (free).
2. Click **New project**. Pick any name and password (you won't need the password again — Supabase manages it).
3. Wait ~2 minutes for the project to spin up.

## 2. Create the database tables
1. In your new project, open **SQL Editor** in the left sidebar.
2. Click **New query**.
3. Open `schema.sql` (included in this folder), copy all of it, paste it into the query editor, and click **Run**.
4. You should see "Success. No rows returned." That means the `profiles`, `todos`, and `question_attempts` tables now exist.

## 3. Turn on email sign-up
1. In the left sidebar, go to **Authentication > Providers**.
2. Make sure **Email** is enabled (it is by default).
3. Optional: under **Authentication > Settings**, you can turn off "Confirm email" if you want new accounts to log in immediately without clicking a confirmation link — handy while testing.

## 4. Connect the app to your project
1. In the left sidebar, go to **Project Settings > API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `supabase-client.js` in this folder and replace:
   ```js
   const SUPABASE_URL = "YOUR_SUPABASE_URL";
   const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
   ```
   with your actual values.

## 5. Upload to GitHub / GitHub Pages
Same process as before — upload all these files (including `questions.js`, `app.js`, `practice.js`, `supabase-client.js`, `styles.css`, and the three `.html` files) to your repo's root, then confirm GitHub Pages is enabled under Settings > Pages. You do **not** need to upload `schema.sql` or this README — they're just setup helpers.

## Files in this app
- `index.html` — sign up / log in
- `dashboard.html` — countdown to test day, to-do list, subject weakness tracker
- `practice.html` — MBE-style and MEE-style practice questions
- `styles.css`, `supabase-client.js`, `questions.js`, `app.js`, `practice.js` — shared code

## Notes
- The anon key is safe to expose in client-side code — it's designed for that, and Row Level Security (set up by `schema.sql`) ensures each user can only read/write their own data.
- Practice questions are original, written in the style/format of released Texas UBE (MBE + MEE) material — not reproductions of actual exam questions.
- Want more questions, more subjects, or a full answer-key writeup for the MEE essays instead of a checklist? Just ask — `questions.js` is a plain list you (or I) can extend anytime.
