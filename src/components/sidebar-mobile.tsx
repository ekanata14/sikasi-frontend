"use client";

import * as React from "react";
import { CalendarDays, CircleUser, Home, LineChart, Menu, Users } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { Data } from "~/data/data";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AppIcon } from "./app-icon";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const SidebarMobile = React.forwardRef(({ className, ...props }, ref) => {
  const currentData = Data.ukm.abbreviation;
  const currentPath = "/d/" + currentData.toLocaleLowerCase();
  const pathname = usePathname().split("/").pop();

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetTitle>
          <VisuallyHidden.Root>
            Sidebar
          </VisuallyHidden.Root>
        </SheetTitle>
        <SheetContent side="left" className="flex flex-col">
          <SheetDescription>
            <VisuallyHidden.Root>
              Sidebar Menu
            </VisuallyHidden.Root>
          </SheetDescription>
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <AppIcon className="mx-auto pb-4" />
              <span className="sr-only">SIKASI</span>
            </Link>
            <Link
              href={currentPath}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                pathname === currentData.toLocaleLowerCase() ? "bg-muted text-primary" : "text-muted-foreground "
              )}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href={currentPath + "/activities"}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                pathname === "activities" ? "bg-muted text-primary" : "text-muted-foreground "
              )}
            >
              <CalendarDays className="h-4 w-4" />
              Aktivitas
            </Link>
            <Link
              href={currentPath + "/users"}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                pathname === "users" ? "bg-muted text-primary" : "text-muted-foreground "
              )}
            >
              <Users className="h-4 w-4" />
              Pengguna{" "}
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                2
              </Badge>
            </Link>
            <Link
              href={currentPath + "/cash"}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                pathname === "cash" ? "bg-muted text-primary" : "text-muted-foreground "
              )}
            >
              <LineChart className="h-4 w-4" />
              Kas UKM
            </Link>
          </nav>
          <div className="mt-auto">
            <Card>

              <CardHeader>
                <CardTitle className="text-center">
                  <Image src={Data.ukm.logo} alt={Data.ukm.abbreviation} width={50} height={50} className="w-auto mx-auto pb-4" />
                  UKM {Data.ukm.abbreviation}
                </CardTitle>
                <CardDescription>
                  Anda sedang berada pada menu administrasi UKM {Data.ukm.abbreviation}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Keluar / Signout
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form> */}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
});
SidebarMobile.displayName = "SidebarMobile";

export { SidebarMobile };