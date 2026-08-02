-- Run this once in your Supabase project's SQL Editor (left sidebar > SQL Editor > New query).
-- It creates the tables this app needs and locks each row to its owner.

-- 1. One row per user: their exam date.
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  test_date date,
  created_at timestamptz default now()
);

-- 2. To-do items.
create table todos (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  task text not null,
  done boolean default false,
  created_at timestamptz default now()
);

-- 3. Every practice question attempt (MBE answers + MEE self-grades feed the subject tracker).
create table question_attempts (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  subject text not null,
  question_id text not null,
  correct boolean not null,
  created_at timestamptz default now()
);

-- Row Level Security: every user can only see/edit their own rows.
alter table profiles enable row level security;
alter table todos enable row level security;
alter table question_attempts enable row level security;

create policy "own profile" on profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "own todos" on todos
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own attempts" on question_attempts
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
