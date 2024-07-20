import { Button } from "@/components/ui/button";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const page = async ({params: {slug}}:{params: {slug:string}}) => {

  const project = await getProject(slug)

  return (
    <main className="container my-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="w-full">
          <Image
            src={project.images[0]}
            width={400}
            height={400}
            className="object-cover w-full aspect-auto"
            alt={project.name}
          />
        </div>
        <div className="w-full">
          <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl text-stone-800">
            {project.name}
          </h1>
          <div className="mb-3 text-md font-md">
            <p>Start Date: {project.start_date}</p>
            <p>Status: {project.status}</p>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-md">Project Coordinators:</h4>
            <ul className="text-sm list-disc list-inside text-stone-600">
              {project.coordinators.map((coordinator) => (
                <li key={coordinator}>{coordinator}</li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-5 text-sm font-medium leading-7">
            {project.content &&
            <PortableText value={project.content} />
            }
          </div>
          <Link href="/projects">
            <Button type="button" className="mt-4 bg-green-600">
              Back To Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default page;
