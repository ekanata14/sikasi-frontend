import { Montserrat as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SiKaSi | Sistem Informasi Kas dan Absensi",
  description: "SiKaSi adalah sebuah platform yang dibuat oleh UKM KSL (Kelompok Studi Linux) yang bertujuan untuk memanajemen absensi dan kas dari suatu UKM di ITB Stikom Bali.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", "min-h-screen", fontSans.variable)}>{children}</body>
    </html>
  );
}
