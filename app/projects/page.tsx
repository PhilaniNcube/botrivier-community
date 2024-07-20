

import { getProjects } from "@/sanity/sanity-utils";

import Image from 'next/image'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const page = async () => {

      const supabase = createClient()

      const { data:projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("title", { ascending: true });

     const myProjects = await getProjects();

     console.log(myProjects);

  return (
    <main className="container py-10">
      {/* {projects?.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))} */}
      <div className="@container w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {myProjects.map((project) => (
          <article key={project._id} className="flex flex-col @xl:flex-row">
            <Image
              src={project.images[0]}
              width={400}
              height={400}
              className="object-cover w-full aspect-square"
              alt={project.name}
            />
            <div className="w-full mt-2">
              <h2 className="text-lg font-semibold text-stone-800">
                {project.name}
              </h2>
              <p className="text-sm text-stone-600 line-clamp-1">Status: {project.status}</p>
              <p className="text-sm text-stone-600">
                Start Date: {project.start_date}
              </p>
              <Link href={`/projects/${project.slug}`}>
                <Button type="button" className="mt-4 bg-green-600">View Project</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
export default page;
