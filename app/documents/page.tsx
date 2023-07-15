import ComingSoon from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";
import { Database } from "@/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { DownloadIcon } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";

const page = async () => {

   const supabase = createServerComponentClient<Database>({ cookies });

  const { data: documents, error } = await supabase
    .from("documents")
    .select("*")
    .order("title", { ascending: true });


  return (
    <main className="py-10 container">
      <h1 className="text-2xl md:text-4xl text-center font-bold">BCV Documents</h1>
      {/* <ComingSoon /> */}
      <div className="flex flex-wrap w-full justify-center gap-4">
        {documents?.map((document) => (
          <article className="w-full max-w-xs flex flex-col items-center justify-center p-8 text-center" key={document.id}>
            <h3 className="text-xl font-bold">{document.title}</h3>
            <Link href={document.src}>
              <Button type="button" className="flex items-center gap-x-3 bg-green-600">
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
