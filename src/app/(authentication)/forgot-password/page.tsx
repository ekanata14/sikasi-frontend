import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Link from "next/link";
import React from "react";
import { AppIcon } from "~/components/app-icon";

export default function ForgotPasswordPage() {
    return (
        <main className="overflow-x-hidden flex flex-col">
            {/* Container */}
            <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit ">

                {/* Logo */}
                <AppIcon className={"w-3/4"}/>

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
                        <Button type="submit" className="w-full bg-blue-500 shadow-md hover:bg-blue-400">Simpan</Button>
                    </div>
                </form>

                {/* Redirect Back btn */}
                <Button asChild className="bg-transparent text-blue-500 inline border-none p-0 text-center">
                    <Link href="/login" className="p-0 hover:bg-transparent text-base h-auto">Kembali</Link>
                </Button>
            </div>
        </main>
    );
}