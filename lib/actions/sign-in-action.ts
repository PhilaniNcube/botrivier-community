"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInAction(formData:FormData) {
  const supabase = createClient()

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const {data: {user}, error} = await supabase.auth.signInWithPassword({
			email,
			password,
		});

    if (error || !user ) {
     redirect("/error");
    }

		if (
			user.email === "mark@tenderscan" ||
			user.email === "ruthodigie@gmail.com" ||
			user.email === "ncbphi001@gmail.com"
		) {
      console.log("redirecting to admin dashboard");
      revalidatePath("/", "layout");
			redirect("/dashboard");
		}

}
