import { Database } from "@/schema"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const getProjects = async () => {

    const supabase = createServerComponentClient<Database>({ cookies })

    const {data, error} = await supabase.from("projects").select("*").order("title", {ascending: true})

    if (error) {
      throw new Error(error.message)
    }

    return data
}
