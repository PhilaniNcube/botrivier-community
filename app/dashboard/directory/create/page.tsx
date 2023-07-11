import { cookies } from "next/headers";
import CreateBusinessForm from "./CreateBusinessForm";
// import { getBusinessTypes } from "@/lib/fetchers/directory";
import { Database } from "@/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const page = async () => {

 const supabase = createServerComponentClient<Database>({ cookies });

 const { data, error } = await supabase
   .from("business_type")
   .select("*")
   .order("title");

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium">
        Create a new business directory entry
      </h1>
      <CreateBusinessForm business_types={data!} />
    </div>
  );
};
export default page;
