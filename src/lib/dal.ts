"use server";

import "server-only";
 
import { cookies } from "next/headers";
import { decrypt } from "~/lib/session";
import { redirect } from "next/navigation";
import { cache } from "react";
import axios from "./axios";
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  
  if (!session?.token) {
    redirect("/login");
  }
 
  return { isAuth: true, token: session.token.data };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const headers = { "Authorization": session.token };

  axios.get(process.env.NEXT_PUBLIC_BACKEND_URL, { headers })
    .then(response => console.log(response));
});