import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/utils/supabase/server";

const Navbar = async () => {

    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser();

  return (
    <nav className="flex mx-auto text-white bg-green-600">
      <div className="container flex items-center">
        <Link href="/">
          <Image src="/images/logo.webp" width={96} height={66} alt="Logo" />
        </Link>{" "}
        <div className="flex items-center justify-around flex-1">
          <Link href="/" className="font-medium text-md">
            Home
          </Link>
          <Link href="/directory" className="font-medium text-md">
            Directory
          </Link>
          <Link href="/about" className="font-medium text-md">
            Who is BCV
          </Link>
          <Link href="/documents" className="font-medium text-md">
            BCV Documents
          </Link>
          <Link href="/projects" className="font-medium text-md">
            Projects
          </Link>
          <Link href="/events" className="font-medium text-md">
            Events
          </Link>
          <Link href="/newsletter" className="font-medium text-md">
            Newsletter
          </Link>
          <Link href="/contact" className="font-medium text-md">
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
              className="px-4 py-2 no-underline rounded-md bg-btn-background hover:bg-btn-background-hover"
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
