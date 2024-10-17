"use client";

import {  useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "~/hooks/auth";

const Logout = () => {
  const { logout } = useAuth();
  const router = useRouter(); 

  useEffect(() => {
    logout();
    router.push("/login");
  }, [logout, router]);
};

export default Logout;
