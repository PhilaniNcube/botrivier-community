import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { createClient } from "@/utils/supabase/server";

const page = async () => {

   const supabase = createClient()

   const { data, error } = await supabase
     .from("projects")
     .select("*")
     .order("title", { ascending: true });

  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <span>
          <h1 className="text-2xl font-semibold text-slate-700">
            Botrivier Projects
          </h1>
        </span>{" "}
        <Link href="/dashboard/projects/create">
          <Button type="button" className="text-white bg-green-600">
            <PlusIcon />
            Add New Project
          </Button>
        </Link>
      </div>
      <div className="w-full mt-6">
        {data?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default page;
