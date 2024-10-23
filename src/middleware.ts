import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/welcome", "/", "/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token");

  console.log(token);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/welcome", req.nextUrl));
  }

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/welcome", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
