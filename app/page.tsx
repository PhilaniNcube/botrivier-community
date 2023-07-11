
import {cookies} from 'next/headers'
import Link from 'next/link'
import Image from 'next/image'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '@/components/ui/button'


export default async function Index() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="py-10 container">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Image
          src="/images/map.jpg"
          width={397}
          height={270}
          alt="Map"
          className="w-full object-cover "
        />
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-gray-900 font-bold text-2xl lg:text-3xl text-center">
            Welcome To Botrivier Community Volunteers NPC
          </h1>
          <p className="text-md text-center mt-4 text-slate-700">
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
          className="w-full object-cover "
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
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:space-x-8">
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
