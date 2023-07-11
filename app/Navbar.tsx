import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "lucide-react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/schema";
import LogoutButton from "@/components/LogoutButton";

const Navbar = async () => {

    const supabase = createServerComponentClient<Database>({ cookies });

    const {
      data: { user },
    } = await supabase.auth.getUser();

  return (
    <nav className="flex mx-auto bg-green-600 text-white">
      <div className="flex container items-center">
        <Link href="/">
          <Image src="/images/logo.webp" width={96} height={66} alt="Logo" />
        </Link>{" "}
        <div className="flex flex-1 justify-around items-center">
          <Link href="/" className="text-md font-medium">
            Home
          </Link>
          <Link href="/directory" className="text-md font-medium">
            Directory
          </Link>
          <Link href="/about" className="text-md font-medium">
            Who is BCV
          </Link>
          <Link href="/documents" className="text-md font-medium">
            BCV Documents
          </Link>
          <Link href="/projects" className="text-md font-medium">
            Projects
          </Link>
          <Link href="/events" className="text-md font-medium">
            Events
          </Link>
          <Link href="/newsletter" className="text-md font-medium">
            Newsletter
          </Link>
          <Link href="/contact" className="text-md font-medium">
            Contact Us
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="https://www.facebook.com/groups/436203844158690">
            <FacebookIcon size={32} className="text-white" />
          </Link>
          {user ? (
            <div className="flex items-center gap-4">
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/login"
              className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
