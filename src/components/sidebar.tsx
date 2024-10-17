"use client";

import React from "react";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, LineChart, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { Data } from "~/data/data";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "next/image";

const Sidebar = React.forwardRef(({ className, ...props }, ref) => {
  const currentData = Data.ukm.abbreviation;
  const currentPath = "/d/" + currentData.toLocaleLowerCase();
  const pathname = usePathname().split("/").pop();

  return (
    <div className="sticky top-10 justify-between h-svh">
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
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
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle className="text-center">
              <Image src={Data.ukm.logo} alt={Data.ukm.abbreviation} width={50} height={50} loading="eager" className="w-auto mx-auto pb-4" />
              UKM {Data.ukm.abbreviation}
            </CardTitle>
            <CardDescription>
              Anda sedang berada pada menu administrasi UKM {Data.ukm.abbreviation}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button onClick={() => {
              Data.user.role = "user";
            }} size="sm" className="w-full">
              Keluar / Signout
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

export { Sidebar };