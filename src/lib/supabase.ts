import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fqghlszgvpvvfbqqwaco.supabase.co";
const supabaseAnonKey = "sb_publishable_3TwXxgh4wiOn3gdPWcXCmA_h6iNSj6T";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);