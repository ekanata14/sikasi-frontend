"use client";

import Image from "next/image";
import React from "react";
import Cookies from "js-cookie";
import { Backdrop } from "~/components/backdrop";
import { LogOut } from "lucide-react";
import { cn } from "~/lib/utils";
import { UserData, UserResponse } from "~/types/userTypes";
import { useToast } from "~/hooks/use-toast";
import {
  OrganizationData,
  OrganizationResponse,
} from "~/types/organizationTypes";
import { getDataFromCookies, useDataFetcher } from "~/hooks/use-data-fetcher";
import { OrganizationList } from "~/components/welcome";

const handleLogout = (): void => {
  Cookies.remove("token");
  Cookies.remove("idUser");
  Cookies.remove("hasLoginToastShown");

  window.location.href = "/login";
};
export default function WelcomePage() {
  const [userOrganizationData, setUserOrganizationData] = React.useState<
    OrganizationData[]
  >([]);
  const [userData, setUserData] = React.useState<UserData>({
    id: 0,
    name: "",
    email: "",
    nim: "",
    email_verified_at: undefined,
    google_id: undefined,
    profile: "",
    department_id: 0,
    mobile_phone: "",
    created_at: new Date(),
    updated_at: new Date(),
    users_roles: [],
  });

  const { toast } = useToast();

  let idUser: string;
  if (typeof window !== "undefined") {
    idUser = getDataFromCookies("idUser");
  }

  useDataFetcher<UserResponse>({
    endpoint: `/users/${idUser}`,
    onSuccess: (data) => {
      setUserData(data.data);

      console.log(idUser);

      if (getDataFromCookies("hasLoginToastShown") == undefined) {
        toast({
          variant: "success",
          title: "Berhasil Masuk!",
          description: `Selamat datang kembali, ${data.data.name}!`,
        });
      }

      Cookies.set("hasLoginToastShown", "true", { expires: 1 });
    },
    onError: (error) => {
      console.error("Error fetching user data:", error);

      if (getDataFromCookies("hasLoginToastShown") == undefined) {
        toast({
          variant: "destructive",
          title: "Ups! Terjadi kesalahan.",
          description:
            "Terjadi kesalahan saat mengambil data pengguna. Silakan coba lagi.",
        });
      }
    },
  });

  useDataFetcher<OrganizationResponse>({
    endpoint: `/users/organization/${idUser}`,
    onSuccess: (data) => {
      setUserOrganizationData(data.data);
    },
    onError: (error) => {
      console.error("Error fetching user organizations data:", error);
    },
  });

  return (
    <main className={cn("grid py-10 gap-4", "lg:block")}>
      {/* Container */}
      <div
        className={cn(
          "max-w-80 mx-auto grid h-full gap-4 relative",
          "lg:max-w-7xl lg:flex lg:flex-col lg:bg-white lg:px-8 lg:py-10 lg:rounded-md lg:shadow-md"
        )}
      >
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute lg:top-8 lg:right-8 top-0 right-0 text-red-500 flex font-semibold"
        >
          <LogOut />
          Logout
        </button>

        {/* Logo */}
        <Image
          className="mx-auto mb-6"
          src="/assets/images/stikom_logo.png"
          width={250}
          height={300}
          alt="Logo Stikom"
        />

        {/* Page Header */}
        <header>
          <h1 className="font-bold text-lg">
            Selamat Datang Kembali, {userData.name}
          </h1>
          <p className="text-sm">
            Pilih salah satu UKM untuk melihat data anda pada UKM terdaftar.
          </p>
        </header>

        {/* Organizations Card Section */}
        <OrganizationList userOrganizationData={userOrganizationData} />
      </div>

      {/* Backdrop Container */}
      <Backdrop
        container={cn(
          "hidden",
          "lg:block lg:absolute lg:min-h-[110vh] lg:opacity-60 lg:top-0 rotate-180 lg:-z-10"
        )}
      />
    </main>
  );
}
