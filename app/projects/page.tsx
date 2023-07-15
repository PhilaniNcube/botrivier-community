import { getProjects } from "@/lib/fetchers/projects";
import ProjectCard from "../dashboard/projects/ProjectCard";

const page = async () => {

  const projects = await getProjects();

  return <main className="py-10 container">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </main>;
};
export default page;
