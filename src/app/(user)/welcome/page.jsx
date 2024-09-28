import { AspectRatio } from "~/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Backdrop } from "~/components/backdrop";
import { ListPlus, LogOut } from "lucide-react";
import { cn } from "~/lib/utils";

export default function RegisterPage() {
  // Dummy data - UKM
  const UKM = [
    {
      abbreviation: "KSL",
      name: "Kelompok Studi Linux",
    },
    {
      abbreviation: "RADE",
      name: "Robotic and Development",
    },
    {
      abbreviation: "PROGRES",
      name: "Programming of Stikom",
    },
  ];

  // Dummy data - Auth Name
  const Auth = {
    name: "Mr.Kesal"
  };

  // Dummy callback function
  const UKMCard = UKM.map(ukm => 
    <Link href="/d/ksl" key={ukm.abbreviation} >
      <AspectRatio ratio={16 / 7} className="bg-white w-full rounded-md shadow-md p-2 hover:text-blue-500 hover:bg-slate-100 m-1">
        <div className="grid grid-cols-5 h-full items-center">
          <div className="col-span-2 flex justify-center items-center">
            <Image
              className="mx-auto"
              src="/assets/images/stikom_logo.png"
              width={100}
              height={100}
              alt="Logo Stikom"
            />
          </div>
          <div className="col-span-3 flex flex-col">
            <p className="text-xs">{ukm.name}</p>
            <h3 className="font-bold text-2xl">{ukm.abbreviation}</h3>
          </div>
        </div>
      </AspectRatio>
    </Link>
  );

  return (
    <main className={cn("grid py-10 gap-4", "lg:block")}>
      {/* Container */}
      <div className={cn("max-w-80 mx-auto grid h-full gap-4 relative", "lg:max-w-7xl lg:flex lg:flex-col lg:bg-white lg:px-8 lg:py-10 lg:rounded-md lg:shadow-md")}>
        <Link href={"/logout"} className="absolute lg:top-8 lg:right-8 text-red-500 flex font-semibold">
          <LogOut />Logout
        </Link>

        {/* Logo */}
        <Image
          className="mx-auto"
          src="/assets/images/stikom_logo.png"
          width={250}
          height={300}
          alt="Logo Stikom"
        />

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Selamat Datang Kembali, {Auth.name}</h1>
          <p className="text-sm">
            Pilih salah satu UKM untuk melihat data anda pada UKM terdaftar.
          </p>
        </header>

        {/* Card Section */}
        <section className={cn("h-full lg:h-fit w-full rounded-sm flex flex-col gap-4", "lg:grid lg:grid-cols-4 lg:bg-gray-100 lg:bg-transparent")}>
            {UKMCard}
            <Link href="">
              <AspectRatio ratio={16 / 7} className={cn("bg-white w-full m-1 p-4 rounded-md shadow-md", "hover:bg-slate-100 hover:text-blue-500")}>
                <span className="font-medium w-full h-full flex justify-center items-center border-gray-800 hover:border-blue-500 border-dashed border-2 rounded-md">
                  <ListPlus className="mr-2" />
                  Tambah UKM
                </span>
              </AspectRatio>
            </Link>
          </section>
      </div>

      {/* Backdrop Container */}
      <Backdrop container={cn("hidden", "lg:block lg:absolute lg:min-h-[110vh] lg:opacity-60 lg:top-0 rotate-180 lg:-z-10")}/>

    </main>
  );
}
