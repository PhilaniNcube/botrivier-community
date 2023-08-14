import { Database } from "@/schema"
import {  createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const getBusinessTypes = async () => {

   const supabase = createServerComponentClient<Database>({ cookies })

  const {data, error} = await supabase.from("business_type").select("*").order("title")

  if (error) {
    throw new Error(error.message)
  }

  return data
}


export const getDirectory = async (query = '') => {

    const supabase = createServerComponentClient<Database>({ cookies })

     const { data, error } = await supabase
     .from("directory")
     .select('*')
     .ilike("business_name", `%${query.toLowerCase()}%`).order("business_name", {ascending: true});

    if (error) {
      throw new Error(error.message)
    }

    return data
}



export const getBusinessTypesByBusinessID = async (businessId:string) => {

   const supabase = createServerComponentClient<Database>({ cookies })

  const {data, error} = await supabase.from("business_directory").select("*, business_type(*)").eq('directory_id', businessId)

  if (error) {
    throw new Error(error.message)
  }

  return data
}
