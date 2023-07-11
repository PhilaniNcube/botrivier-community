import { Button } from "@/components/ui/button";
// import { getProjects } from "@/lib/fetchers/projects";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { Database } from "@/schema";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const page = async () => {

   const supabase = createServerComponentClient<Database>({ cookies });

   const { data, error } = await supabase
     .from("projects")
     .select("*")
     .order("title", { ascending: true });

  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <span>
          <h1 className="font-semibold text-slate-700 text-2xl">
            Botrivier Projects
          </h1>
        </span>{" "}
        <Link href="/dashboard/projects/create">
          <Button type="button" className="bg-green-600 text-white">
            <PlusIcon />
            Add New Project
          </Button>
        </Link>
      </div>
      <div className="mt-6 w-full">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default page;
