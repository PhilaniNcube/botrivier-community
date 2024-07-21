"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction(formData:FormData) {
  const supabase = createClient()

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

    if(!email || !password) {
      redirect("/error?error=Email and password are required");
    }

		const {data: {user}, error} = await supabase.auth.signInWithPassword({
			email,
			password,
		});

    console.log({user, error});

    if (error ) {
     redirect(`/error?error=${error.message}`);
    }

    if(!user) {
      redirect("/error?error=Invalid credentials");
    }

		if (
			user.email === "mark@tenderscan" ||
			user.email === "ruthodigie@gmail.com" ||
			user.email === "ncbphi001@gmail.com"
		) {
      console.log("redirecting to admin dashboard");
      revalidatePath("/", "layout");
			redirect("/");
		}

}
