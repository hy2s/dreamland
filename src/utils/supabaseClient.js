import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://fpnosrvzktinuupjmktg.supabase.co';
const supabaseUrl = 'https://odrzrzehngxzziahvkbh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kcnpyemVobmd4enppYWh2a2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNjAzMzksImV4cCI6MjA2OTkzNjMzOX0.8kVDYNBWyXTDDVzT2kYNKZJT2dED2WSjpgVVq5E1BaM';

export const supabase = createClient(supabaseUrl, supabaseKey);