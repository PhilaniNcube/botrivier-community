import Image from "next/image";

const WhoIsBCV = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full flex flex-col justify-center items-start">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Who is BCV?
          </h1>
          <p className="text-md mt-3 ">
            BCV is a non-political group of Botrivier residents working on a
            voluntary basis to bring improvements to our rural town. BCV started
            in 2020, and we are a multi- cultural group from varying economic
            backgrounds.
          </p>
          <p className="text-md mt-3 ">
            Botrivier&apos;s population has grown very quickly over the past 10
            years, and one of our biggest challenges as a town is unemployment.
            Part of BCV&apos;s focus is to create awareness about the skills and
            services available within our town so that we can support each
            other.
          </p>
        </div>
        <div className="w-full">
          <Image src="/images/directors.jpeg" width={1166} height={813} alt="Directors" className="w-full object-cover aspect-video" />
        </div>
      </div>
    </div>
  );
};
export default WhoIsBCV;
