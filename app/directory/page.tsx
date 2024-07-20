
import { Separator } from "@/components/ui/separator";
import Search from "./Search";
import DirectoryGrid from "./DirectoryGrid";
import { getDirectory } from "@/lib/fetchers/directory";

const page = async ({searchParams:{query = ''}}:{searchParams: {query:string}}) => {

  console.log(query)

 const directory = await getDirectory(query);


  return (
    <main className="container py-10">
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
