import CreateBusinessForm from "./CreateBusinessForm";
import { getBusinessTypes } from "@/lib/fetchers/directory";

const page = async () => {

const business_types = await getBusinessTypes();

  return (
    <div className="w-full">
      <h1 className="text-2xl font-medium">
        Create a new business directory entry
      </h1>
      <CreateBusinessForm business_types={business_types} />
    </div>
  );
};
export default page;
