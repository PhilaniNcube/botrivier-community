import { Button } from "@/components/ui/button";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

const page = async ({params: {slug}}:{params: {slug:string}}) => {

  const project = await getProject(slug)

  return (
    <main className="my-10 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <Image
            src={project.images[0]}
            width={400}
            height={400}
            className="w-full object-cover aspect-auto"
            alt={project.name}
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
            {project.name}
          </h1>
          <div className="text-md font-md mb-3">
            <p>Start Date: {project.start_date}</p>
            <p>Status: {project.status}</p>
          </div>
          <div className="w-full">
            <h4 className="text-md font-medium">Project Coordinators:</h4>
            <ul className="list-disc list-inside text-sm text-stone-600">
              {project.coordinators.map((coordinator) => (
                <li key={coordinator}>{coordinator}</li>
              ))}
            </ul>
          </div>
          <div className="w-full text-sm font-medium leading-7 mt-5">
            <PortableText value={project.content!} />
          </div>
          <Link href="/projects">
            <Button type="button" className="bg-green-600 mt-4">
              Back To Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
