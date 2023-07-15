import ProjectCard from "../dashboard/projects/ProjectCard";
import { cookies } from "next/headers";
import { Database } from "@/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const page = async () => {

      const supabase = createServerComponentClient<Database>({ cookies });

      const { data:projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("title", { ascending: true });



  return <main className="py-10 container">
    {projects?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </main>;
};
export default page;
