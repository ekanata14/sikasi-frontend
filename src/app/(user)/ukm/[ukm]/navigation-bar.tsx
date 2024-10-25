"use client";

import * as React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Check, ChevronsUpDown, Coins, LayoutDashboard, ListTodo, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { Button } from "../../../../components/ui/button";
import { AppIcon } from "~/components/app-icon";

const ukm = [
  {
    value: "ksl",
    label: "UKM KSL",
    picture: "/assets/images/ksl.png",
  },
  {
    value: "rade",
    label: "UKM RADE",
  },
  {
    value: "progress",
    label: "UKM PROGRESS",
  },
];

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  data: {
    user: {
      name: string;
      role: string;
    };
  };
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(({ className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("ksl");

  const NavTitle = ({ children }) => {
    return <div className={cn("scroll-m-20 text-base p-1 font-medium tracking-tight text-inherit hidden hover:text-black text-slate-500", "lg:block")}>{children}</div>;
  };

  const { data } = props;

  return (
    <nav
      className={cn("w-full h-20 z-30 fixed bottom-0", "lg:static lg:flex lg:items-center", className)}
      ref={ref}
    >
      <div className={cn("w-full h-3/4 justify-center flex", "lg:justify-between lg:px-8")}>
        <div className="text-2xl h-full lg:flex items-center font-semibold text-slate-700 hidden">
          <div className="flex items-end gap-3">
            <AppIcon className="w-12" />
            <div>
              SIKASI
            </div>
          </div>
        </div>

        {/* Mobile Profile */}
        <div className={cn("lg:bg-white bg-slate-900 border lg:border-slate-300 rounded-sm h-fit w-11/12 grid grid-flow-col px-4 py-2 gap-4", "lg:gap-0 lg:w-96 lg:justify-between")}>
          <div className="flex lg:w-fit">
            <Popover
              open={open}
              onOpenChange={setOpen}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-label="Pilih Organisasi"
                  aria-expanded={open}
                  className="min-w-[200px] justify-between font-semibold text-sm h-full flex lg:bg-zinc-50 bg-slate-800 text-white lg:text-slate-700 lg:w-fit w-full"
                >
                  {value ? ukm.find((framework) => framework.value === value)?.label : "Pilih Organisasi"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] p-0">
                <Command>
                  <CommandInput placeholder="Cari Organisasi..." />
                  <CommandList>
                    <CommandEmpty>Tidak ada UKM terdaftar.</CommandEmpty>
                    <CommandGroup>
                      {ukm.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                          className="font-medium"
                        >
                          <Check className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("w-full lg:w-auto h-10 flex justify-center items-center", "lg:h-auto")}>
              <User className="lg:hidden" color="#ffffff" />
              <NavTitle>
                <div className="flex gap-2 items-center font-medium text-sm text-slate-700">
                  Mr.Kesal
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="pp"
                    />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                </div>
              </NavTitle>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"mr-4 mb-4"}>
              <DropdownMenuLabel>Profil Pengguna</DropdownMenuLabel>
              <DropdownMenuItem className="flex gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div>
                  <b>{data.user.name}</b>
                  <p className="underline">{data.user.role}</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href=""
                  className="p-2"
                >
                  Administrator Mode
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/profile/edit"
                  className="p-2"
                >
                  Pengaturan Pengguna
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href=""
                  className="p-2"
                >
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
