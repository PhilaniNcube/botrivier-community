import { Separator } from "@/components/ui/separator";
import { Database } from "@/schema";

type Props ={
  project: Database["public"]["Tables"]["projects"]["Row"];
}

const ProjectCard = ({project}:Props) => {
  return <div className="w-3/4 my-4">
    <div className="w-full grid grid-cols-2">
      <div className="w-full p-6">
        <p className="text-blue-500 text-sm">{project.start_date}</p>
        <h2 className="text-2xl font-semibold text-slate-800 mt-6">{project.title}</h2>
        <p className="text-md text-slate-600 font-medium mt-3">{project.description}</p>
        <Separator />
        <p className="font-bold text-md text-slate-600">{project.completed ? "Completed" : "Not Complete"}</p>
      </div>
      <div className="w-full">
        <img src={project.images[0]} alt={project.title} className="w-full object-cover aspect-video"/>
      </div>
    </div>
  </div>;
};
export default ProjectCard;
