import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovlsgcccdtrmshpnmmqd.supabase.co";
const supabaseAnonKey = "sb_publishable_wIExHFx9dCeRABHxPuAnPQ_K42wiK3n";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
