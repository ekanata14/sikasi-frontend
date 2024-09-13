import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import LoginForm from "~/components/form/login-form";
import { AppIcon } from "~/components/app-icon";

export default function LoginPage() {
  return (
    <main className={cn("", "flex flex-col")}>

      {/* Container */}
      <div className="max-w-80 m-auto lg:py-0 py-10 grid gap-4 relative z-10 lg:order-2 min-h-fit">

        {/* Logo */}
        <AppIcon className={"w-3/4"}/>

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Selamat Datang</h1>
          <p className="text-sm">
            Selamat datang di Sistem Kas dan Absensi
            Ormawa! Silahkan lakukan authentikasi.
          </p>
        </header>

        {/* Form */}
        <LoginForm />

        {/* Create Account btn */}
        <div className="gap-2 flex font-medium">
          Tidak memiliki akun?
          <Link href="/register" className="p-0 hover:bg-transparent text-blue-500 text-base h-auto">Daftar disini</Link>
        </div>
      </div>
    </main>
  );
}
