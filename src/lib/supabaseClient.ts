import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://zbexmyiktxcwwlmonpgn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiZXhteWlrdHhjd3dsbW9ucGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1Mjc2NjksImV4cCI6MjAzMzEwMzY2OX0.dB9GE49gS1vp6q4RTgF85TvNM9eMPgQGYAQ87p3fS8c'
)
