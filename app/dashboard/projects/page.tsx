import { Button } from "@/components/ui/button";
import { getProjects } from "@/lib/fetchers/projects";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const page = async () => {

  const projects = await getProjects()

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default page;
