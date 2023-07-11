"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database } from "@/schema";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/navigation"
import { FormEvent } from "react";

const Search = () => {

  const router = useRouter()

  const search = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = Object.fromEntries(new FormData(e.currentTarget).entries())

    console.log(query)

   router.push(`/directory?query=${query.search}`)


  };



  return (
    <form onSubmit={search} className="flex space-x-4 items-center">
      <Input
        name="search"
        id="search"
        type="search"
        placeholder="Search Directory"
      />
      <Button className="w-[100px] md:w-[200px]" type="submit">
        Search
      </Button>
    </form>
  );
};
export default Search;

