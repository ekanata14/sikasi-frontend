import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import RegisterForm from "./form";
import { AppIcon } from "~/components/app-icon";

export default function RegisterPage() {
  return (
    <main className={cn("flex flex-col")}>

      {/* Container */}
      <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit">

        {/* Logo */}
        <AppIcon className={"w-3/4"}/>

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Mari perkenalkan diri</h1>
          <p className="text-sm">
            Selamat datang di Sistem Kas dan Absensi 
            Ormawa! Silahkan lakukan registraasi.
          </p>
        </header>

        {/* Form */}
        <RegisterForm/>

        {/* Create Account btn */}
        <div className="gap-2 flex font-medium">
          Sudah memiliki akun? 
          <Link href="/login" className="p-0 hover:bg-transparent text-blue-500 text-base h-auto">Login disini</Link>
        </div>
      </div>
    </main>
  );
}
