import { getBusiness, getBusinessTypes } from "@/lib/fetchers/directory";
import UpdateBusiness from "./UpdateBusiness";

const page = async ({params: {id}}:{params:{id:string}}) => {

  const {business, types} = await getBusiness(id);

  const business_types = await getBusinessTypes()

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium">
        Create a new business directory entry
      </h1>
      <UpdateBusiness types={types} business={business} business_types={business_types} />
    </div>
  );
};
export default page;
