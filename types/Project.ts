import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: string[];
  content: PortableTextBlock[];
  status: string;
  start_date: string;
  coordinators: string[];
}
