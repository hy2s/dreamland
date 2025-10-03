import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmlvbtwayftzusksvwbu.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbHZidHdheWZ0enVza3N2d2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MjI5ODYsImV4cCI6MjA3NDk5ODk4Nn0.D7zavW3Q8ZJqYIdKuVcD-kDHIQmZmlacuFyCr-fVsDw';

export const supabase = createClient(supabaseUrl, supabaseKey);