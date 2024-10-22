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
import { cn } from "~/lib/utils";
import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Check, ChevronsUpDown, Coins, LayoutDashboard, ListTodo, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { Button } from "./ui/button";
import { getUser } from "~/lib/dal";

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

const Navbar = React.forwardRef(({ className, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("ksl");

  const NavTitle = ({ children }) => {
    return (
      <div className={cn("scroll-m-20 text-base p-1 font-medium tracking-tight text-inherit hidden hover:text-black text-slate-500", "lg:block")}>
        {children}
      </div>
    );
  };

  React.useEffect(() => {
    async function fetchDataUser() {
      getUser();
    }
    fetchDataUser();
  }, []);

  const { data } = props;

  return (
    <nav className={cn("w-full h-20 z-30 fixed bottom-0", "lg:bottom-auto lg:top-2 lg:left-0 lg:items-center lg:justify-center lg:flex lg:static lg:h-auto lg:border-b-2", className)} ref={ref}>
      <div className={cn("w-full h-3/4 justify-center flex", "lg:justify-between lg:px-4")}>
        {/* Mobile Profile */}
        <div className={cn("bg-slate-900 rounded-sm h-full w-11/12 grid grid-cols-4 px-4 py-2 text-white fill-white",
          "lg:flex lg:bg-transparent lg:text-black lg:w-full lg:fill-slate-900 lg:px-0 lg:gap-10 lg:justify-between")}>
          <div className="flex col-span-3 lg:gap-8">
            <Popover open={open} onOpenChange={setOpen} className="hidden lg:grid">
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-label="Pilih Organisasi"
                  aria-expanded={open}
                  className="min-w-[200px] justify-between font-medium h-full hidden lg:flex py-4"
                >
                  {value
                    ? ukm.find((framework) => framework.value === value)?.label
                    : "Pilih Organisasi"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Cari Organisasi..." />
                  <CommandList>
                    <CommandEmpty>
                      Tidak ada UKM terdaftar.
                    </CommandEmpty>
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
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <Link href="/ksl" className={cn("w-full h-10 flex justify-center items-center", "lg:h-auto lg:w-fit")}>
              <LayoutDashboard className="lg:hidden" />
              <NavTitle>
                Beranda
              </NavTitle>
            </Link>
            <Link href="/ksl/activities" className={cn("w-full h-10 flex justify-center items-center", "lg:h-auto lg:w-fit")}>
              <ListTodo className="lg:hidden" />
              <NavTitle>
                Aktivitas
              </NavTitle>
            </Link>
            <Link href="/ksl/cash" className={cn("w-full h-10 flex justify-center items-center", "lg:h-auto lg:w-fit")}>
              <Coins className="lg:hidden" />
              <NavTitle>
                Kas UKM
              </NavTitle>
            </Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className={cn("w-full lg:w-auto h-10 flex justify-center items-center", "lg:h-auto")}>
              <User className="lg:hidden" />
              <NavTitle>
                <div className="flex gap-2 items-center font-medium">
                  Mr.Kesal
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="pp" />
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
                <Link href="" className="p-2">
                  Administrator Mode
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/profile/edit" className="p-2">
                  Pengaturan Pengguna
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