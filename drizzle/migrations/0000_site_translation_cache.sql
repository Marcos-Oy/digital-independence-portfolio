CREATE TABLE public.site_translation_cache (cache_key text PRIMARY KEY, language text NOT NULL, source text NOT NULL, translated text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.site_translation_cache TO service_role;
ALTER TABLE public.site_translation_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service manages translations" ON public.site_translation_cache FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE TABLE public.site_translation_control (id text PRIMARY KEY, status integer NOT NULL, message text NOT NULL, updated_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.site_translation_control TO service_role;
ALTER TABLE public.site_translation_control ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service manages translation state" ON public.site_translation_control FOR ALL TO service_role USING (true) WITH CHECK (true);