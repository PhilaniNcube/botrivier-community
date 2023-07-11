import { Database } from "@/schema";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
  const supabase = createRouteHandlerClient<Database>({cookies})

  const {data, error} = await supabase.from("projects").select("*").order("title", {ascending: true});

  if (error) {
    return NextResponse.json({error: error.message, status: error.code}, {
      status: 400,
    });
  }

  return NextResponse.json(data, {
    status: 200,
  })
}
