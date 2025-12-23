-- Create contacts table for form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can read contacts (for now, we'll keep it simple)
CREATE POLICY "Contacts are private" 
ON public.contacts 
FOR SELECT 
USING (false);