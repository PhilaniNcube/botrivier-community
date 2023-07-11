import { Database } from "@/schema";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  business_name: z.string().min(2).max(50),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  website: z.string(),
  phone_number: z.string(),
  business_types: z.array(z.string()),
});

export async function GET(req:Request) {
  const supabase = createRouteHandlerClient<Database>({cookies})

  const {data, error} = await supabase.from("directory").select("*").order("business_name", {ascending: true});

  if (error) {
    return NextResponse.json({error: error.message, status: error.code}, {
      status: 400,
    });
  }

  return NextResponse.json(data, {
    status: 200,
  })
}


export async function POST(request:Request) {
  const supabase = createRouteHandlerClient<Database>({cookies})

  const {business_name, first_name, last_name, email, website, phone_number, business_types} = requestSchema.parse(await request.json())

  const {data, error} = await supabase.from("directory").insert([{
    business_name,
    first_name,
    last_name,
    email,
    website,
    phone_number,
  }]).select("*").single();

  if (error) {
    return NextResponse.json({error: error.message, status: error.code}, {
      status: 400,
    });
  }

  if(data) {
    await supabase.from("business_directory").insert(business_types.map((type) => ({
      business_type: type,
      directory_id: data.id,
    })));
  }

  return NextResponse.json(data, {
    status: 200,
  })
}
