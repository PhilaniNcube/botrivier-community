import { getDirectory } from "@/lib/fetchers/directory";

import { Search } from "lucide-react";
import DirectoryGrid from "../DirectoryGrid";
import { Separator } from "@/components/ui/separator";

const page = async ({
  searchParams: { query = "" },
}: {
  searchParams: { query: string };
}) => {
  console.log(query);

  const directory = await getDirectory(query);

  return (
    <main className="py-10 container">
      <h1 className="text-4xl font-semibold text-slate-800">
        Botrivier Business Directory
      </h1>
      <Separator className="my-4" />
      <Search />
      <DirectoryGrid directory={directory} />
    </main>
  );
};
export default page;
