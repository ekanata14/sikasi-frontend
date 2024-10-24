import "server-only";

import { NextRequest, NextResponse } from "next/server";
import axiosInstance from "./lib/axios";

const publicRoutes = ["/login", "/register", "/welcome"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isAdmin = path.startsWith("/admin");

  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token");
  const idUser = req.cookies.get("idUser");
  
  // TODO: perbaiki jika ada super admin (2)
  const pageLevel = isAdmin ? "1" : "3";

  // cek apakah route yang diakses adalah route yang tidak perlu dicek
  if (!path.startsWith("/users-role/check") && !path.startsWith("/manifest")) {
    // cek apakah route yang diakses adalah route api yang tidak perlu dicek
    if(!path.startsWith("/api")){
      try {
        const headers = { "Authorization": `Bearer ${token.value}` };
        const nickname = path.split("/")[2];

        await axiosInstance.get(`/api/organization/nickname/${nickname}`, { headers });
  
        const response = await axiosInstance.get(`/users-role/check/${idUser.value}/${pageLevel}/${nickname}`, { headers });
  
        if(response.data.data.access == false || !response.data.data.access) {
          if(!isPublicRoute && token){
            return NextResponse.redirect(new URL("/welcome", req.nextUrl));
          }
        }
  
      } catch (error) {
        // console.log("Error Middleware:", error);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
