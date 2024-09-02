import { AspectRatio } from "~/components/ui/aspect-ratio"
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import { Backdrop } from "~/components/backdrop";
import { LogOut } from "lucide-react";

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
  ]

  // Dummy data - Auth Name
  const Auth = {
    name: "Mr.Kesal"
  }

  // Dummy callback function
  const UKMCard = UKM.map(ukm => 
    <Link href="/d/ksl" key={ukm.abbreviation} >
      <AspectRatio ratio={16 / 7} className="bg-white w-full rounded-md shadow-md p-2">
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
    <>
      {/* Container */}
      <div className="max-w-80 lg:max-w-7xl py-10 mx-auto grid h-full lg:flex lg:flex-col gap-4 relative">
        <Link href={"#"} className="absolute top-8 right-0 text-red-500 flex font-semibold">
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
          <h1 className="font-bold text-lg">Selamat Datang, {Auth.name}</h1>
          <p className="text-sm">
            Pilih salah satu UKM untuk melihat data anda pada UKM tersebut
          </p>
        </header>

        {/* Card Section */}
        <section className="h-full lg:h-fit w-full rounded-sm bg-gray-100 lg:bg-transparent flex flex-col gap-4 overflow-y-scroll lg:overflow-auto lg:grid lg:grid-cols-4">
            {UKMCard}
            <Link href="/d/ksl">
              <AspectRatio ratio={16 / 7} className="bg-white w-full rounded-md p-4">
                <span className="font-medium w-full h-full flex justify-center items-center border-gray-800 shadow-md border-dashed border-2 rounded-md">
                  Tambah UKM
                </span>
              </AspectRatio>
            </Link>
          </section>
      </div>

      {/* Backdrop Container */}
      <Backdrop/>

    </>
  );
}
