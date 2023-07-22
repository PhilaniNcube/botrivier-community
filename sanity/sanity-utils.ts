import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import config from "@/lib/sanity.config"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Project } from "@/types/Project";

export async function getProjects():Promise<Project[]> {
  const client = createClient({
    projectId: "jl31vd3g",
    dataset: "production",
    apiVersion: "2023-07-22",
    // title: "Botrivier Community Volunteers",
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      createdAt,
      name,
      "slug": slug.current,
     "images": images[].asset->url,
      content,
      status,
      start_date,
      coordinators
    }

    `
  )
}

export async function getProject(slug:string):Promise<Project> {
  const client = createClient({
    projectId: "jl31vd3g",
    dataset: "production",
    apiVersion: "2023-07-22",
    // title: "Botrivier Community Volunteers",
  });

  return client.fetch(
    groq`*[ _type == "project" && slug.current == $slug ][0]{
      _id,
      createdAt,
      name,
      "slug": slug.current,
     "images": images[].asset->url,
      content,
      status,
      start_date,
      coordinators
    }
    `,{
      slug
    }
  )
}


// const builder = imageUrlBuilder(config)

// export function urlFor(source: SanityImageSource) {
//   return builder.image(source)
// }
