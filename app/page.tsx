
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'



export default async function Index() {


  return (
    <main className="container py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Image
          src="/images/map.jpg"
          width={397}
          height={270}
          alt="Map"
          className="object-cover w-full "
        />
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-2xl font-bold text-center text-gray-900 lg:text-3xl">
            Welcome To Botrivier Community Volunteers NPC
          </h1>
          <p className="mt-4 text-center text-md text-slate-700">
            BCV is a non-political group of Botrivier residents working to
            improve communication in our beautiful rural town. This website is
            an initiative to create a business hub.
          </p>
        </div>
        <Image
          src="/images/logo.jpeg"
          width={397}
          height={270}
          alt="Map"
          className="object-cover w-full "
        />
      </div>

      <div className="relative w-full mt-8">
        <Image
          src="/images/view.jpg"
          width={3668}
          height={1881}
          alt="Background"
          className="w-full object-cover aspect-[3/1]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center md:flex-row md:space-x-8">
          <Link href="/directory">
            <Button className="bg-green-600 text-white text-md w-[240px]">
              Search Business Directory
            </Button>
          </Link>
          <Link href="/directory">
            <Button className="bg-green-600 text-white text-md w-[240px]">
              List Your Business
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
