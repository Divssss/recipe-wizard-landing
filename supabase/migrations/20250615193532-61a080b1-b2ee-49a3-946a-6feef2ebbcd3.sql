
-- 1. Profile table for extra user info
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text unique,
  created_at timestamp with time zone default now()
);

-- 2. Ingredients table
CREATE TABLE public.ingredients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text, -- e.g. 'veg', 'non-veg', 'gluten-free'
  nutrition jsonb, -- calories, protein, fat, carbs etc
  image_url text
);

-- 3. Uploads table (images from users)
CREATE TABLE public.uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  image_url text,
  detected_ingredients uuid[] default '{}', -- array of ingredient ids
  created_at timestamp with time zone default now()
);

-- 4. Recipes table
CREATE TABLE public.recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text,
  ingredients uuid[] NOT NULL, -- array of ingredient ids
  steps jsonb, -- array of strings, or array of step objects
  tags text[],
  prep_time integer, -- in minutes
  calories integer,
  protein integer,
  veg_status text -- 'veg' or 'non-veg'
);

-- Enable RLS for uploads, recipes, profiles
ALTER TABLE public.uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Uploads RLS: only owner can select/insert/delete
CREATE POLICY "Users can view their uploads" ON public.uploads
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their uploads" ON public.uploads
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can delete their uploads" ON public.uploads
  FOR DELETE USING (user_id = auth.uid());

-- Profiles RLS: users can read/update own profile
CREATE POLICY "Users can view their profile" ON public.profiles
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (id = auth.uid());

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (id = auth.uid());

-- Recipes: anyone can SELECT for now (public recipes)
CREATE POLICY "Public can select recipes" ON public.recipes
  FOR SELECT USING (true);

-- Ingredients: allow anyone to read
ALTER TABLE public.ingredients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can select ingredients" ON public.ingredients
  FOR SELECT USING (true);

