import { AspectRatio } from "~/components/ui/aspect-ratio"
import Link from 'next/link'
import Image from 'next/image'
import React from "react";

export default function RegisterPage() {
  // Dummy data - UKM
  const UKM = [
    {
      abbreviation: "KSL",
      name: "Kelompok Studi Linux",
      category: "Cyber Security and Linux Mastering"
    },
    {
      abbreviation: "KSL",
      name: "Kelompok Studi Linux",
      category: "Cyber Security and Linux Mastering"
    },
    {
      abbreviation: "KSL",
      name: "Kelompok Studi Linux",
      category: "Cyber Security and Linux Mastering"
    },
    {
      abbreviation: "KSL",
      name: "Kelompok Studi Linux",
      category: "Cyber Security and Linux Mastering"
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
            <h3 className="font-bold text-lg">{ukm.abbreviation}</h3>
            <p className="text-sm">{ukm.category}</p>
          </div>
        </div>
      </AspectRatio>
    </Link>
  );

  return (
    <>
      {/* Container */}
      <div className="max-w-80 lg:max-w-7xl py-10 mx-auto grid h-full lg:flex lg:flex-col gap-4 relative">
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
        <section className="h-full lg:h-fit w-full rounded-sm bg-gray-100 lg:bg-transparent p-4 flex flex-col gap-4 overflow-y-scroll lg:overflow-auto lg:grid lg:grid-cols-4">
            {UKMCard}
            <Link href="/d/ksl">
              <AspectRatio ratio={16 / 7} className="bg-white w-full rounded-md shadow-md p-4">
                <span className="font-medium w-full h-full flex justify-center items-center border-gray-800 border-dashed border-2 rounded-md">
                  Tambah UKM
                </span>
              </AspectRatio>
            </Link>
          </section>
      </div>

      {/* Backdrop Container */}
      <div className="relative w-full overflow-hidden h-[10rem] lg:h-full block lg:hidden">
        {/* SVG Shape */}
        <svg className="absolute top-0 lg:bottom-0 right-0 -left-[8%] w-[120%] m-auto lg:rotate-90 lg:w-[200%] lg:right-auto lg:-left-[80%]" viewBox="0 0 602 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="371.174" y="188.225" width="102.417" height="74.4504" transform="rotate(-119.619 371.174 188.225)" fill="#DE0E0E"/>
          <rect x="126.719" y="264.555" width="155.643" height="164.655" transform="rotate(-119.619 126.719 264.555)" fill="#ECF016"/>
          <rect x="440.781" y="349.559" width="185.453" height="185.453" transform="rotate(-119.619 440.781 349.559)" fill="#2371E7"/>
          <rect x="54.1965" y="192.457" width="109.657" height="109.657" transform="rotate(-119.619 54.1965 192.457)" fill="#DE0E0E"/>
          <rect x="260.719" y="216.849" width="49.2792" height="49.2792" transform="rotate(-119.619 260.719 216.849)" fill="#2371E7"/>
          <rect x="341.225" y="202.537" width="20.8735" height="20.8735" transform="rotate(-119.619 341.225 202.537)" fill="#ECF016"/>
          <rect x="427.963" y="28.6255" width="20.8735" height="20.8735" transform="rotate(-119.619 427.963 28.6255)" fill="#2371E7"/>
          <rect x="149.408" y="64.6221" width="32.03" height="32.03" transform="rotate(-119.619 149.408 64.6221)" fill="#2371E7"/>
          <rect x="309.818" y="181.719" width="12.6105" height="12.6105" transform="rotate(-119.619 309.818 181.719)" fill="#DE0E0E"/>
          <rect x="181.94" y="12.5789" width="9.22496" height="9.22496" transform="rotate(-119.619 181.94 12.5789)" fill="#DE0E0E"/>
          <rect x="415.345" y="187.357" width="101.969" height="101.969" transform="rotate(-119.619 415.345 187.357)" fill="#ECF016"/>
          <path d="M65.6147 257.293L27.6706 190.552L94.4117 152.608L132.356 219.349L65.6147 257.293Z" fill="#2371E7"/>
        </svg>

      </div>

    </>
  );
}
