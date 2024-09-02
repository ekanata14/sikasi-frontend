import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import { cn } from "~/lib/utils";
import RegisterForm from "~/components/form/register-form";
import { Backdrop } from "~/components/backdrop";

export default function RegisterPage() {
  return (
    <section className={cn("min-h-screen flex flex-col","lg:grid lg:grid-cols-2")}>
      {/* Container */}
      <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit max-h-screen">
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
          <h1 className="font-bold text-lg">Mari perkenalkan diri</h1>
          <p className="text-sm">
            Selamat datang di Sistem Kas dan Absensi 
            Ormawa! Silahkan lakukan registraasi.
          </p>
        </header>

        {/* Form */}
        <RegisterForm/>

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
            Sign up with Google
          </Link>
        </Button>

        {/* Create Account btn */}
        <div className="gap-2 flex">
          Sudah memiliki akun? 
          <Button asChild className="bg-transparent text-blue-500 inline border-none p-0">
            <Link href="/login" className="p-0 hover:bg-transparent text-base h-auto pb-10">Login disini</Link>
          </Button>
        </div>

      </div>

      {/* Backdrop Container */}
      <Backdrop/>
    </section>
  );
}
