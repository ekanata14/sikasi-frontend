import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import { Backdrop } from "~/components/backdrop";

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
            <Backdrop/>
        </section>
    );
}