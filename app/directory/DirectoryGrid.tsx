import { Database } from "@/schema";

type Props = {
  directory: Database["public"]["Tables"]["directory"]["Row"][];
}

const DirectoryGrid = ({directory}:Props) => {
  return (
    <div className="w-full mt-8">

       {directory.length === 0 && <p className="text-lg text-stone-600">No results found</p>}

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

        {directory.map((item) => (
          <article
            key={item.id}
            className="bg-green-600 text-white rounded-md shadow p-3"
          >
            <h3 className="font-semibold text-md">{item.business_name}</h3>
            <p className="text-sm">
              Name: {item.first_name} {item.last_name}
            </p>
            {item.email && <p className="text-sm">Email: {item.email}</p>}
            {item.website && <p className="text-sm">Website: {item.website}</p>}
            {item.phone_number && (
              <p className="text-sm">
                Contact Number: <span className="font-medium">{item.phone_number}</span>
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
export default DirectoryGrid;
