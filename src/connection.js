import { createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://plqlxhbfclvszbdaqvip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBscWx4aGJmY2x2c3piZGFxdmlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3ODYxNTcsImV4cCI6MjA2NTM2MjE1N30.OHnds49rTkcjkY9ygKFzlMqLZ1rb8tWpkpgQBKpy_-Q'

export const supabase = createClient(supabaseUrl, supabaseKey)

  