import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import React from "react";

export default function ForgotPasswordPage() {
    return (
        <section className="overflow-x-hidden h-screen flex flex-col lg:grid lg:grid-cols-2">
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
                    <h1 className="font-bold text-lg">Lupa sandi</h1>
                    <p className="text-sm">
                        Silahkan masukan email dari akun terkait. Link permohonan
                        perubahan kata sandi akan dikirimkan melalui email tercantum.
                    </p>
                </header>

                {/* Form */}
                <form className="flex flex-col gap-4">
                    <div>
                        <Input type="email" name="email" placeholder="Ketikan Email" />
                    </div>
                    <div>
                        <Button type="submit" className="w-full bg-blue-500 shadow-md hover:bg-blue-400">Submit</Button>
                    </div>
                </form>

                {/* Redirect Back btn */}
                <Button asChild className="bg-transparent text-blue-500 inline border-none p-0 text-center">
                    <Link href="/login" className="p-0 hover:bg-transparent text-base h-auto">Kembali</Link>
                </Button>

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