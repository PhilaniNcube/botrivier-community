import { getBusiness } from "@/lib/fetchers/directory";
import UpdateBusiness from "./UpdateBusiness";

const page = async ({params: {id}}:{params:{id:string}}) => {

  const {business, types} = await getBusiness(id);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium">
        Create a new business directory entry
      </h1>
      <UpdateBusiness types={types} business={business} />
    </div>
  );
};
export default page;
