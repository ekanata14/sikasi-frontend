import * as React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { IMAGES } from "~/constants/assets";
import { Input } from "~/components/ui/input";

export default function LoginPage() {
  return (
    <section className={cn("min-h-screen h-full min-w-full w-full", "px-8 pt-10 pb-36")}>
      {/*Logo Section  */}
      <div className={cn("flex justify-center items-center")}>
        <Image
          src={IMAGES.logoStikom}
          alt="Logo STIKOM"
          width={500}
          height={500}
          className={cn("h-32 w-56 object-contain")}
        />
      </div>

      {/* Login Form Section */}
      <div className={cn("flex flex-col gap-6", "mt-12")}>
        {/* Form Title & Subtitle */}
        <div>
          <h2 className={cn("text-xl font-semibold tracking-tight mb-2")}>Let’s sign you in</h2>
          <p className={cn("text-sm")}>Selamat datang di Sistem Kas dan Absensi Ormawa! Silahkan lakukan authentikasi.</p>
        </div>

        <form
          action=""
          className="space-y-6"
        >
          <Input
            type="email"
            placeholder="Email"
            className="py-6"
          />
          <Input
            type="password"
            placeholder="Password"
            className="py-6"
          />
        </form>
      </div>

      {/* Backdrop Images */}
      <div className={cn("fixed -bottom-4 right-0 left-0 -z-[100]")}>
        <Image
          src={IMAGES.backdropImage}
          alt="Backdrop Image"
          className={cn("w-full h-full object-cover")}
          width={999}
          height={999}
        />
      </div>
    </section>
  );
}
