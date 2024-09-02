import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet"
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Data } from "~/data/data";
import Link from "next/link";

const Sidebar = React.forwardRef(({ className, ...props}, ref) => {
    const { CurrentParams } = props;
    return (
        <>
            <Sheet>
                <SheetTrigger className={cn("p-2 bg-slate-900 rounded-lg m-4", "fixed top-0 right-0")}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetHeader>
                    <SheetTitle>SIKASI - ADMIN</SheetTitle>
                    <SheetDescription className={cn("w-full grid justify-center")}>
                        <Image className="rounded-full" width={150} height={150} src={"/assets/images/bruce-mars.jpeg"} alt="profile_pic" />
                    </SheetDescription>
                    <div className={cn("w-full grid justify-center")}>
                        <p className={cn("font-bold text-slate-900 text-lg")}>
                            {Data.user.name}
                        </p>
                        <p className={cn("text-slate-900")}>
                            {Data.user.role}
                        </p>
                    </div>
                    <section className={cn("pt-4 grid gap-3")}>
                        <Link className={cn("w-full py-3 bg-blue-500 font-medium text-white px-16 rounded-md")} href={"/d/"+CurrentParams.ukm}>
                            Dashboard
                        </Link>
                        <Link className={cn("w-full py-3 bg-blue-500 font-medium text-white px-16 rounded-md")} href={"/d/"+CurrentParams.ukm+"/activities"}>
                            Aktivitas
                        </Link>
                        <Link className={cn("w-full py-3 bg-blue-500 font-medium text-white px-16 rounded-md")} href={"/d/"+CurrentParams.ukm+"/cash"}>
                            KAS
                        </Link>
                        <Link className={cn("w-full py-3 bg-blue-500 font-medium text-white px-16 rounded-md")} href={"/d/"+CurrentParams.ukm+"/user"}>
                            User
                        </Link>
                        <Link className={cn("w-full py-3 bg-red-500 font-medium text-white px-16 rounded-md")} href={"#"}>
                            Kembali
                        </Link>
                    </section>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
});
Sidebar.displayName = "Sidebar";

export { Sidebar };