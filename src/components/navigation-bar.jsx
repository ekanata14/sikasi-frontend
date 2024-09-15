"use client";

import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";
import { cn } from "~/lib/utils";
import Link from "next/link";

const Navbar = React.forwardRef(({ className, ...props }, ref) => {

    const NavTitle = ({ children }) => {
        return (
            <p className={cn("scroll-m-20 text-xs p-1 font-semibold tracking-tight text-inherit hidden", "lg:block")}>
                {children}
            </p>
        );
    };

    const { data } = props;

    return (
        <nav className={cn("w-full h-20 z-30", "fixed bottom-0", "lg:bottom-auto lg:top-2 lg:left-0", "lg:items-end lg:justify-center lg:flex lg:static lg:h-16", className)} ref={ref}>
            <div className={cn("w-full h-3/4 justify-center flex", "lg:justify-between lg:max-w-6xl")}>
                {/* Mobile Profile */}
                <div className={cn("bg-slate-900 h-full w-11/12 rounded-md grid grid-cols-4 px-4 py-2 text-white fill-white", 
                    "lg:flex lg:bg-transparent lg:text-black lg:fill-slate-900 lg:max-w-md lg:px-0 lg:gap-10")}>
                    <Link href="/d/ksl" className={cn("w-full h-10 flex justify-center items-center", "lg:h-8 lg:w-fit")}>
                        <svg className="fill-inherit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-180v-390q0-14.25 6.38-27 6.37-12.75 17.62-21l260-195q15.68-12 35.84-12Q500-825 516-813l260 195q11.25 8.25 17.63 21 6.37 12.75 6.37 27v390q0 24.75-17.62 42.37Q764.75-120 740-120H590q-12.75 0-21.37-8.63Q560-137.25 560-150v-220q0-12.75-8.62-21.38Q542.75-400 530-400H430q-12.75 0-21.37 8.62Q400-382.75 400-370v220q0 12.75-8.62 21.37Q382.75-120 370-120H220q-24.75 0-42.37-17.63Q160-155.25 160-180Z" /></svg>
                        <NavTitle>
                            Beranda
                        </NavTitle>
                    </Link>
                    <Link href="/d/ksl/activities" className={cn("w-full h-10 flex justify-center items-center", "lg:h-8 lg:w-fit")}>
                        <svg className="fill-inherit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-160q-33 0-56.5-23.5T320-240q0-33 23.5-56.5T400-320h400q33 0 56.5 23.5T880-240q0 33-23.5 56.5T800-160H400Zm0-240q-33 0-56.5-23.5T320-480q0-33 23.5-56.5T400-560h400q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400H400Zm0-240q-33 0-56.5-23.5T320-720q0-33 23.5-56.5T400-800h400q33 0 56.5 23.5T880-720q0 33-23.5 56.5T800-640H400Zm-240 0q-33 0-56.5-23.5T80-720q0-33 23.5-56.5T160-800q33 0 56.5 23.5T240-720q0 33-23.5 56.5T160-640Zm0 240q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm0 240q-33 0-56.5-23.5T80-240q0-33 23.5-56.5T160-320q33 0 56.5 23.5T240-240q0 33-23.5 56.5T160-160Z" /></svg>
                        <NavTitle>
                            Aktivitas
                        </NavTitle>
                    </Link>
                    <Link href="/d/ksl/cash" className={cn("w-full h-10 flex justify-center items-center", "lg:h-8 lg:w-fit")}>
                        <svg className="fill-inherit" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z" /></svg>
                        <NavTitle>
                            Kas UKM
                        </NavTitle>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={cn("w-full h-10 flex justify-center items-center", "lg:h-8 lg:hidden")}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                            <NavTitle>
                                Profil
                            </NavTitle>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"mr-4 mb-4"}>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem className="flex gap-2">
                                <Image className="rounded-full" width={50} height={50} src={"/assets/images/bruce-mars.jpeg"} alt="profile_pic" />
                                <div>
                                    <b>{data.user.name}</b>
                                    <p>{data.user.role}</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    Manage UKM
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    List Daftar UKM
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/profile/edit" className="p-2">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    Log out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Desktop Profile */}
                <div className={cn("hidden", "lg:flex gap-2 items-center")}>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={cn("w-full flex justify-center items-center h-8 gap-2")}>
                            <div className="text-right">
                                <p className="text-sm font-semibold">{data.user.name}</p>
                                <p className="text-xs">{data.user.role}</p>
                            </div>
                            <Image className="rounded-full border-green-500 border-2 p-0.5" width={35} height={35} src={"/assets/images/bruce-mars.jpeg"} alt="profile_pic" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"mr-4 mb-4"}>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem className="flex gap-2">
                                <Image className="rounded-full" width={50} height={50} src={"/assets/images/bruce-mars.jpeg"} alt="profile_pic" />
                                <div>
                                    <b>{data.user.name}</b>
                                    <p>{data.user.role}</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    Manage UKM
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    List Daftar UKM
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/profile/edit" className="p-2">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="" className="p-2">
                                    Log out
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
});
Navbar.displayName = "Navbar";

export { Navbar };