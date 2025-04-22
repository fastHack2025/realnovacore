import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ssmtqsjbppkcnfflymth.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzbXRxc2picHBrY25mZmx5bXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NjkzNjAsImV4cCI6MjA2MDQ0NTM2MH0.WPCHUvfU0O8GRvkMraOdImuUJPpF6RZg67C8Qk2FjD0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
