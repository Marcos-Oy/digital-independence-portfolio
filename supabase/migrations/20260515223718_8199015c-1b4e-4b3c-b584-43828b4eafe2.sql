-- Habilitar extensión para tareas programadas
create extension if not exists pg_cron with schema extensions;

-- Tabla de reseñas
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  service text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text not null,
  created_at timestamptz not null default now()
);

create index idx_reviews_created_at on public.reviews (created_at desc);

alter table public.reviews enable row level security;

-- Cualquiera puede ver reseñas, salvo las de <=2 estrellas con más de 7 días
create policy "Public can view visible reviews"
  on public.reviews
  for select
  to anon, authenticated
  using (
    rating > 2
    or created_at >= now() - interval '7 days'
  );

-- Bloquear inserts directos: solo el service role (edge function) puede insertar
create policy "Block direct inserts"
  on public.reviews
  for insert
  to anon, authenticated
  with check (false);

-- Tarea diaria: eliminar reseñas <=2 estrellas con más de 7 días
select cron.schedule(
  'cleanup-low-rating-reviews',
  '15 3 * * *',
  $$ delete from public.reviews where rating <= 2 and created_at < now() - interval '7 days' $$
);