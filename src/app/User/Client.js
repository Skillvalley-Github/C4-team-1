import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xfsjkkyvhjdrukkywkmu.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhmc2pra3l2aGpkcnVra3l3a211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NTc0NzgsImV4cCI6MjAwOTEzMzQ3OH0.A4R7xZceizZgkDKU9tNaenp0VGeYkxlqI_n9qLVZAsg'
export const supabase = createClient(supabaseUrl, supabaseKey)