-- Migration: 20260911_0016_set_the_one_details.sql
-- Rebrand store details to The One Clothing and initialize branding storage bucket

BEGIN;

-- 1. Update or Insert Store Settings (id = 1)
INSERT INTO public.store_settings (id, name, owner_name, phone, email, address, updated_at)
VALUES (
  1,
  'The One Clothing',
  'Santhosh B',
  '+91 63853 68479',
  'theoneclothing2026@gmail.com',
  '174, Brazzer Street, Opp. Apollo Medical, Ammoor, Ranipet - 632 501',
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  name = 'The One Clothing',
  owner_name = 'Santhosh B',
  phone = '+91 63853 68479',
  email = 'theoneclothing2026@gmail.com',
  address = '174, Brazzer Street, Opp. Apollo Medical, Ammoor, Ranipet - 632 501',
  updated_at = NOW();

-- 2. Create public 'branding' storage bucket if not exists
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'branding',
  'branding',
  TRUE,
  10485760,
  ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE SET
  public = TRUE,
  file_size_limit = 10485760;

-- 3. Storage Policies for branding bucket
DROP POLICY IF EXISTS branding_public_read ON storage.objects;
CREATE POLICY branding_public_read ON storage.objects
  FOR SELECT TO public
  USING (bucket_id = 'branding');

DROP POLICY IF EXISTS branding_portal_upload ON storage.objects;
CREATE POLICY branding_portal_upload ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'branding');

DROP POLICY IF EXISTS branding_portal_update ON storage.objects;
CREATE POLICY branding_portal_update ON storage.objects
  FOR UPDATE TO anon, authenticated
  USING (bucket_id = 'branding')
  WITH CHECK (bucket_id = 'branding');

COMMIT;
