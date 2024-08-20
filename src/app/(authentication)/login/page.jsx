import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { cn } from "~/lib/utils";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

export default function LoginPage() {
  return (
    <section className={cn("overflow-x-hidden h-screen", "flex flex-col", "lg:grid lg:grid-cols-2")}>
      {/* Container */}
      <div className={cn("max-w-80 m-auto py-10 lg:py-0 min-h-fit z-10", "grid gap-4 relative", "max-h-screen lg:order-2")}>
        {/* Logo */}
        <Image
          className={cn("mx-auto")}
          src="/assets/images/stikom_logo.png"
          width={250}
          height={300}
          alt="Logo Stikom"
        />

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Selamat Datang</h1>
          <p className="text-sm">
            Selamat datang di Sistem Kas dan Absensi 
            Ormawa! Silahkan lakukan authentikasi.
          </p>
        </header>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <Input type="email" name="email" placeholder="Ketikan Email" />
          </div>
          <div>
            <Input type="password" name="password" placeholder="Ketikan Password" />
          </div>
          <div>
            <Button type="submit" className="w-full bg-blue-500 shadow-md hover:bg-blue-400">Submit</Button>
          </div>
        </form>

        {/* Divide */}
        <div className="grid grid-cols-7 justify-center items-center text-center gap-2">
          <span className="col-span-3 border-black border-b h-1"></span>
          <p>atau</p>
          <span className="col-span-3 border-black border-b h-1"></span>
        </div>

        {/* Sign in Google */}
        <Button asChild className="w-full bg-blue-500 hover:bg-blue-400 shadow-md gap-2 pl-2">
          <Link href="/login" className="">
            <svg className="w-auto max-h-8 bg-white rounded-full p-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48"> <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            Sign in with Google
          </Link>
        </Button>

        {/* Create Account btn */}
        <div className="gap-2 flex font-medium">
          Tidak memiliki akun?
          <Button asChild className="bg-transparent text-blue-500 inline border-none p-0">
            <Link href="/register" className="p-0 hover:bg-transparent text-base h-auto pb-10">Daftar disini</Link>
          </Button>
        </div>

      </div>

      {/* Backdrop Container */}
      <div className="relative w-full overflow-hidden h-[10rem] lg:h-full">
        {/* SVG Shape */}
        <svg className="absolute top-0 lg:bottom-0 right-0 -left-[8%] w-[120%] m-auto lg:rotate-90 lg:w-[200%] lg:right-auto lg:-left-[80%]" viewBox="0 0 602 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="371.174" y="188.225" width="102.417" height="74.4504" transform="rotate(-119.619 371.174 188.225)" fill="#DE0E0E" />
          <rect x="126.719" y="264.555" width="155.643" height="164.655" transform="rotate(-119.619 126.719 264.555)" fill="#ECF016" />
          <rect x="440.781" y="349.559" width="185.453" height="185.453" transform="rotate(-119.619 440.781 349.559)" fill="#2371E7" />
          <rect x="54.1965" y="192.457" width="109.657" height="109.657" transform="rotate(-119.619 54.1965 192.457)" fill="#DE0E0E" />
          <rect x="260.719" y="216.849" width="49.2792" height="49.2792" transform="rotate(-119.619 260.719 216.849)" fill="#2371E7" />
          <rect x="341.225" y="202.537" width="20.8735" height="20.8735" transform="rotate(-119.619 341.225 202.537)" fill="#ECF016" />
          <rect x="427.963" y="28.6255" width="20.8735" height="20.8735" transform="rotate(-119.619 427.963 28.6255)" fill="#2371E7" />
          <rect x="149.408" y="64.6221" width="32.03" height="32.03" transform="rotate(-119.619 149.408 64.6221)" fill="#2371E7" />
          <rect x="309.818" y="181.719" width="12.6105" height="12.6105" transform="rotate(-119.619 309.818 181.719)" fill="#DE0E0E" />
          <rect x="181.94" y="12.5789" width="9.22496" height="9.22496" transform="rotate(-119.619 181.94 12.5789)" fill="#DE0E0E" />
          <rect x="415.345" y="187.357" width="101.969" height="101.969" transform="rotate(-119.619 415.345 187.357)" fill="#ECF016" />
          <path d="M65.6147 257.293L27.6706 190.552L94.4117 152.608L132.356 219.349L65.6147 257.293Z" fill="#2371E7" />
        </svg>
      </div>

    </section>
  );
}
