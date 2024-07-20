
import CreateBusinessForm from "./CreateBusinessForm";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const page = async () => {

 const supabase = createClient();

 const { data, error } = await supabase
   .from("business_type")
   .select("*")
   .order("title");

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium">
        Create a new business directory entry
      </h1>
      {data &&
      <CreateBusinessForm business_types={data} />
      }
    </div>
  );
};
export default page;
