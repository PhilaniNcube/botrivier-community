
import { createClient } from "@/utils/supabase/server"


export const getBusinessTypes = async () => {

   const supabase = createClient()

  const {data, error} = await supabase.from("business_type").select("*").order("title")

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const getBusinessDirectory = async () => {
 const supabase = createClient()

 const {data, error, count} = await supabase.from("directory").select("*", {count: 'exact'}).order("business_name", {ascending: true})

  if (error) {
    throw new Error(error.message)
  }

  return {
    data,
    count
  }

}


export const getDirectory = async (query = '') => {

    const supabase = createClient()

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

   const supabase = createClient()

  const {data, error} = await supabase.from("business_directory").select("*, business_type(*)").eq('directory_id', businessId)

  if (error) {
    throw new Error(error.message)
  }

  return data
}


export const getBusiness = async (businessId:string) => {

   const supabase = createClient()

  const {data:business, error:businessError} = await supabase.from("directory").select("*").eq('id', businessId).single()

  const {data:types, error:errorTypes} = await supabase.from("business_directory").select("*, business_type(*)").eq('directory_id', businessId)



  if (businessError || errorTypes) {
    throw new Error(`${businessError?.message} ${errorTypes?.message}`)
  }

  return {
    business,
    types
  }
}
