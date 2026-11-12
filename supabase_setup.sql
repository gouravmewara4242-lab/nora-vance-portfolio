-- ==============================================================================
-- SUPABASE DATABASE & STORAGE SETUP FOR GOURAV MEWARA PORTFOLIO
-- Execute this script directly in your Supabase Dashboard:
-- 1. Go to https://supabase.com/dashboard/project/cigphrvgzalovxyvyvah
-- 2. Click "SQL Editor" on the left navigation bar
-- 3. Click "New Query", paste this entire script, and click "Run" (Ctrl + Enter)
-- ==============================================================================

-- 1. Create the 'projects' table
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  category_label TEXT,
  client_name TEXT,
  year TEXT DEFAULT '2026',
  duration TEXT,
  summary TEXT,
  video_url TEXT,
  aspect_ratio TEXT DEFAULT '9:16',
  image_url TEXT,
  featured BOOLEAN DEFAULT true,
  tools TEXT,
  author_email TEXT DEFAULT 'gourav.mewara4242@gmail.com',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- 3. Grant RLS Policies for Projects Table
-- Public Read: Anyone visiting your portfolio can view your projects
DROP POLICY IF EXISTS "Allow public read" ON public.projects;
CREATE POLICY "Allow public read" 
  ON public.projects 
  FOR SELECT 
  TO public 
  USING (true);

-- Insert: Allow uploads from the Admin panel via publishable key
DROP POLICY IF EXISTS "Allow insert" ON public.projects;
CREATE POLICY "Allow insert" 
  ON public.projects 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Update: Allow edits from the Admin panel
DROP POLICY IF EXISTS "Allow update" ON public.projects;
CREATE POLICY "Allow update" 
  ON public.projects 
  FOR UPDATE 
  TO anon, authenticated 
  USING (true) 
  WITH CHECK (true);

-- Delete: Allow removals from the Admin panel
DROP POLICY IF EXISTS "Allow delete" ON public.projects;
CREATE POLICY "Allow delete" 
  ON public.projects 
  FOR DELETE 
  TO anon, authenticated 
  USING (true);

-- 4. Create the 'reels' Storage Bucket (Public so videos/images load in the browser)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('reels', 'reels', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 5. Storage Bucket Policies
-- Allow anyone to view/stream videos and images from the 'reels' bucket
DROP POLICY IF EXISTS "Allow public read reels" ON storage.objects;
CREATE POLICY "Allow public read reels" 
  ON storage.objects 
  FOR SELECT 
  TO public 
  USING (bucket_id = 'reels');

-- Allow uploading videos & thumbnails to 'reels' bucket
DROP POLICY IF EXISTS "Allow upload reels" ON storage.objects;
CREATE POLICY "Allow upload reels" 
  ON storage.objects 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (bucket_id = 'reels');

-- Allow updating files in 'reels' bucket
DROP POLICY IF EXISTS "Allow update reels" ON storage.objects;
CREATE POLICY "Allow update reels" 
  ON storage.objects 
  FOR UPDATE 
  TO anon, authenticated 
  USING (bucket_id = 'reels');

-- Allow deleting files from 'reels' bucket
DROP POLICY IF EXISTS "Allow delete reels" ON storage.objects;
CREATE POLICY "Allow delete reels" 
  ON storage.objects 
  FOR DELETE 
  TO anon, authenticated 
  USING (bucket_id = 'reels');

-- ==============================================================================
-- 6. SQL COMMANDS TO DELETE VIDEOS / PROJECTS FROM SUPABASE:
-- ==============================================================================

-- A. Delete a specific video project by its unique ID:
-- DELETE FROM public.projects WHERE id = 'custom-1794507898561';

-- B. Delete all custom uploaded videos (starts with custom-):
-- DELETE FROM public.projects WHERE id LIKE 'custom-%';

-- C. Delete by title:
-- DELETE FROM public.projects WHERE title ILIKE '%your_title%';

-- D. Clear all uploaded projects from the database:
-- TRUNCATE TABLE public.projects;

-- ==============================================================================
-- Setup Complete! Your Supabase database & storage are now fully configured.
-- ==============================================================================
