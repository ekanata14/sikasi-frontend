import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AppIcon } from "~/components/app-icon";
import { Sidebar } from "~/components/sidebar";
import { Data } from "~/data/data";
import Image from "next/image";
import { SidebarMobile } from "~/components/sidebar-mobile";


export default function Layout({ children }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <AppIcon className="h-6 w-auto" />
              <span className="">SIKASI</span>
            </Link>
          </div>

          <div className="sticky top-10 justify-between h-svh">
            <Sidebar/>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>
                    <Image src={Data.ukm.logo} alt={Data.ukm.abbreviation} width={100} height={100} loading="eager" className="w-auto h-auto mx-auto pb-4" />
                    UKM {Data.ukm.abbreviation}
                  </CardTitle>
                  <CardDescription>
                    Anda sedang berada pada menu administrasi UKM {Data.ukm.abbreviation}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Keluar / Signout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <SidebarMobile />
        <main className="flex flex-1 flex-col w-full gap-4 p-4 lg:gap-6 lg:p-6 lg:w-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout;