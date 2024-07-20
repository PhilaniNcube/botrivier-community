import { Button } from "@/components/ui/button";
import { getDirectory } from "@/lib/fetchers/directory";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import DirectoryTable from "./DirectoryTable";

export const dynamic = "force-dynamic";

const page = async () => {

const directory = await getDirectory()


  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <span>
          <h1 className="text-2xl font-semibold text-slate-700">
            Botrivier Business Directory
          </h1>
        </span>{" "}
        <Link href="/dashboard/directory/create">
          <Button type="button" className="text-white bg-green-600">
            <PlusIcon />
            Add New Business
          </Button>
        </Link>
      </div>
      <div className="w-full mt-6">
        <DirectoryTable directory={directory} />
      </div>
    </div>
  );
};
export default page;
