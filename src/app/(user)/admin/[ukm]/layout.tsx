import Link from "next/link";

import { AppIcon } from "~/components/app-icon";
import { Sidebar } from "~/components/sidebar";
import { SidebarMobile } from "~/components/sidebar-mobile";


export default function Layout({ children }) {
  return (
    <div className="grid lg:h-screen min-h-screen lg:overflow-hidden w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <AppIcon className="h-6 w-auto" />
              <span className="">SIKASI</span>
            </Link>
          </div>
          <Sidebar />
        </div>
      </div>
      <div className="flex flex-col h-full">
        <SidebarMobile />
        <main className="flex flex-1 flex-col w-screen gap-4 p-4 lg:gap-6 lg:p-6 lg:w-auto lg:overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
};

Layout;