"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function forgotPasswordAction(formData:FormData) {

  const email = formData.get("email") as string;

  if(!email) {
    redirect("/error");
  }

  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    redirect("error");
  }
}
