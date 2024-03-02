import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzrzhmlmeghpqlnndmxz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cnpobWxtZWdocHFsbm5kbXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyODUwNjcsImV4cCI6MjAyNDg2MTA2N30.cCSm2H1ZAux4KaQ1cyJxcCRk7ltD5MKWY4vYP-p2B28"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
