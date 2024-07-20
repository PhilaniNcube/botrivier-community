
import { Button } from "@/components/ui/button";

import { createClient } from "@/utils/supabase/server";

import { DownloadIcon } from "lucide-react";

import Link from "next/link";

export const dynamic = "force-dynamic";

const page = async () => {

   const supabase = createClient()

  const { data: documents, error } = await supabase
    .from("documents")
    .select("*")
    .order("title", { ascending: true });


  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold text-center md:text-4xl">BCV Documents</h1>
      {/* <ComingSoon /> */}
      <div className="flex flex-wrap justify-center w-full gap-4">
        {documents?.map((document) => (
          <article className="flex flex-col items-center justify-center w-full max-w-xs p-8 text-center" key={document.id}>
            <h3 className="text-xl font-bold">{document.title}</h3>
            <Link href={document.src}>
              <Button type="button" className="flex items-center bg-green-600 gap-x-3">
                <DownloadIcon className="w-6 h-6" />
                Download Document
              </Button>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
};
export default page;
