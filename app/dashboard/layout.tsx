import type { ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DashboardNav from "./DashboardNav";
import { Separator } from "@/components/ui/separator";
import { getCachedUser } from "@/lib/fetchers/user";
import { redirect } from "next/navigation";


const layout = async ({children}:{children:ReactNode}) => {

  const user = await getCachedUser();

  if (!user) {
    redirect('/login')  ;
  }

  return (
    <main className="container py-10">
      <DashboardNav />
      <Separator className="my-2" />
      {children}
    </main>
  );
};
export default layout;
