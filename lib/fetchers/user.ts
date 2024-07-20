import { createClient } from "@/utils/supabase/server";
import { cache } from "react";

export const getCachedUser = cache(async() => {
  const supabase = createClient();

  const {data:{user}, error} = await supabase.auth.getUser();


  return user;
})
