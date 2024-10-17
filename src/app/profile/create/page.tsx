import { AppIcon } from "~/components/app-icon";
import ProfileCreateForm from "~/components/form/profile-create";
import { cn } from "~/lib/utils";
import { Backdrop } from "~/components/backdrop";

export default function ForgotPasswordPage() {
  return (
    <section className={cn("flex flex-col","lg:grid lg:grid-cols-2")}>
      {/* Container */}
      <div className="max-w-80 m-auto py-10 lg:py-0 grid gap-4 relative z-10 lg:order-2 min-h-fit">
        {/* Logo */}
        <AppIcon className={"w-3/4"}/>

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">Hampir selesai</h1>
          <p className="text-sm">
            Silahkan lengkapi data diri untuk melanjutkan penggunaan Sistem.
          </p>
        </header>

        {/* Form */}
        <ProfileCreateForm />

      </div>

      {/* Backdrop Container */}
      {/* <Backdrop/> */}
    </section>
  );
}