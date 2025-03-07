import React from "react";
import ProfileEditForm from "~/components/form/profile-edit";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { AppIcon } from "~/components/app-icon";

export default function RegisterPage() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2">
      {/* Container */}
      <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit ">
        {/* Logo */}
        <AppIcon className={"w-3/4"}/>

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Ubah Data Pengguna</h1>
          <div className="text-sm">
            Silahkan melakukan perubahan yang sesuai pada data anda. {" "}
            <Link className={cn("text-blue-500")} href={"/profile/change-password"}> 
              Ubah Password?
            </Link>
          </div>
        </header>

        {/* Form */}
        <ProfileEditForm />

      </div>
    </section>
  );
}
