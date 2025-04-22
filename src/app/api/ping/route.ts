import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { error } = await supabase.from("users").select("id").limit(1);
  if (error) return new NextResponse("Supabase ERROR", { status: 500 });
  return new NextResponse("Supabase OK", { status: 200 });
}
