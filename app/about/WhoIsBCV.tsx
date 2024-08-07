
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

const images = [
  "/images/children.jpg",
  "/images/farmer.jpg",
  "/images/aerial.jpg",
  "/images/valley.jpg",
]

const WhoIsBCV = async () => {

   const supabase = createClient()

   const { data: directors, error } = await supabase
     .from("directors")
     .select("*")
     .order("position", { ascending: true });

   const { data: portfolios, error:portfolioErrors } = await supabase
     .from("portfolios")
     .select("*")
     .order("title", { ascending: true });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center w-full">
          <h1 className="text-2xl font-bold text-center md:text-4xl">
            Who is BCV?
          </h1>
          <p className="mt-3 text-md ">
            BCV is a non-political group of Botrivier residents working on a
            voluntary basis to bring improvements to our rural town. BCV started
            in 2020, and we are a multi- cultural group from varying economic
            backgrounds.
          </p>
          <p className="mt-3 text-md ">
            Botrivier&apos;s population has grown very quickly over the past 10
            years, and one of our biggest challenges as a town is unemployment.
            Part of BCV&apos;s focus is to create awareness about the skills and
            services available within our town so that we can support each
            other.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/images/directors.jpeg"
            width={1166}
            height={813}
            alt="Directors"
            className="object-cover w-full"
          />
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-2xl font-bold text-center">BCV Directors</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {directors?.map((director) => (
            <div
              key={director.id}
              className="w-full max-w-[400px] flex flex-col p-4 justify-center text-center items-center space-y-2 bg-slate-200 rounded-md"
            >
              <h2 className="text-lg font-bold text-zinc-700">
                {director.position}
              </h2>
              <p className="text-md text-slate-600">
                {director.first_name} {director.last_name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-6 mt-16">
        <div className="w-full">
          <h2 className="text-2xl font-bold">BCV Portfolios</h2>
          <div className="grid justify-between grid-cols-2 gap-4 mt-4 ">
            {portfolios?.map((portfolio) => (
              <article key={portfolio.id} className="w-full pb-3 border-b border-slate-300">
                <h3 className="text-lg font-semibold">{portfolio.title}</h3>
                <p className="mt-2 text-md">{portfolio.manager}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-3">
          {images.map((image) => (
            <Image
              key={image}
              src={image}
              width={1166}
              height={813}
              alt="Image"
              className="object-cover w-full rounded-md aspect-video"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhoIsBCV;
