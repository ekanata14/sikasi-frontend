import type { MetadataRoute } from "next";
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SIKASI STIKOM BALI",
    short_name: "SIKASI",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "assets/images/stikom_logo.webp",
        sizes: "780x470",
        type: "image/webp",
      },
    ],
  };
}