import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"; 
import { AppIcon } from "~/components/app-icon";
import React from "react";
import { Backdrop } from "~/components/backdrop";

export default function RegisterPage() {
  return (
    <section className="overflow-x-hidden h-screen flex flex-col lg:grid lg:grid-cols-2">
      {/* Container */}
      <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit">
        {/* Logo */}
        <AppIcon />

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Ubah kata sandi</h1>
          <p className="text-sm">
            Silahkan memberikan kata sandi baru yang mudah diingat dan kuat untuk akun anda.
          </p>
        </header>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <Input type="email" name="email" readOnly placeholder="readonly@mail.com" />
          </div>
          <div>
            <Input type="password" name="password" placeholder="Ketikan Password Baru"  />
          </div>
          <div>
            <Input type="password" name="confirm-password" placeholder="Konfirmasi Password" />
          </div>
          <div>
            <Button type="submit" className="w-full bg-blue-500 shadow-md hover:bg-blue-400">Simpan</Button>
          </div>
        </form>

      </div>

      {/* Backdrop Container */}
      <Backdrop/>
    </section>
  );
}
