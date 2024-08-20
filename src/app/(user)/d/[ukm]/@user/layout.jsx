import { Navbar } from "~/components/navigation-bar";
import React from "react";
import { cn } from "~/lib/utils";

export default function Layout({ children }) {
  const Data = {
    ukm: {
      abbreviation: "KSL",
      cashUser: "Rp. 90.000",
      totalCash: "Rp. 2.000.000",
      logo: "/assets/images/ksl.png",
      activities: [
        {
          id: "1",
          name: "Pelatihan",
          date: "14 September 2024",
          timeStart: "15.00",
          timeEnd: "18.00",
        },
        {
          id: "2",
          name: "Pelatihan",
          date: "16 September 2024",
          timeStart: "15.00",
          timeEnd: "18.00",
        },
        {
          id: "3",
          name: "Pelatihan",
          date: "18 September 2024",
          timeStart: "15.00",
          timeEnd: "18.00",
        },
      ],
    },
    user: {
      name: "Mr.kesal",
      role: "Pengurus UKM",
    }
  }

  return(
    <div className="lg:grid">
      <div className={cn("w-full", "lg:max-w-6xl lg:order-2 lg:mx-auto")}>
        <span className={cn("hidden", "w-full border-b-2 lg:block p-1")}></span>
        { children }
      </div>
      <Navbar className={"lg:order-1"} data={Data} />
    </div>
  ) 
}