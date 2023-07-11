import { ReactNode } from "react";
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

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className="py-10 container">
      <DashboardNav />
      <Separator className="my-2" />
      {children}
    </main>
  );
};
export default layout;
