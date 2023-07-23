import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Database } from "@/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Search from "./Search";
import DirectoryGrid from "./DirectoryGrid";
import { getDirectory } from "@/lib/fetchers/directory";

const page = async ({searchParams:{query = ''}}:{searchParams: {query:string}}) => {

  console.log(query)

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
