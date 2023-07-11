import { Button } from "@/components/ui/button";
import { getDirectory } from "@/lib/fetchers/directory";
import { Database } from "@/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { PlusIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import DirectoryTable from "./DirectoryTable";

export const revalidate = 0

const page = async () => {

const directory = await getDirectory()


  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <span>
          <h1 className="font-semibold text-slate-700 text-2xl">
            Botrivier Business Directory
          </h1>
        </span>{" "}
        <Link href="/dashboard/directory/create">
          <Button type="button" className="bg-green-600 text-white">
            <PlusIcon />
            Add New Business
          </Button>
        </Link>
      </div>
      <div className="mt-6 w-full">
        <DirectoryTable directory={directory} />
      </div>
    </div>
  );
};
export default page;
