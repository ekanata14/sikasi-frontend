import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { Data } from "~/data/data";
import "chart.js/auto";
import Chart from "~/components/chart/chart";

export default function DashboardAdmin() {

  return (
    <main className={cn("px-5 w-full min-h-screen")}>
      <header className={cn("pt-20 pb-2")}>
        <h1 className="font-bold text-lg">Dashboard Admin</h1>
        <p className="text-sm">
          Halo Mr.kesal, selamat datang di dashboard admin.
        </p>
      </header>
      <section className={cn("gap-2 grid w-full")}>
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-md")}><span className={cn("bg-blue-500 text-white rounded-md px-2")}>{Data.ukm.activities.length}</span> &#160; Aktivitas mendatang</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={cn("text-md")}><span className={cn("bg-green-500 text-white rounded-md px-2")}>0</span> &#160; Permohonan bergabung</CardTitle>
          </CardHeader>
        </Card>
        <Chart ChartType="line" />
        <div className={"gap-2 grid grid-cols-1 xs:grid-cols-2"}>
          <Card>
            <CardHeader>
              <CardTitle className={cn("text-md flex flex-row text-center gap-2 items-center", "xs:flex-col xs:gap-2")}><span className={cn("bg-green-500 text-white rounded-md px-2 max-w-fit")}>50</span> Anggota Aktif</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={cn("text-md flex flex-row text-center gap-2 items-center", "xs:flex-col xs:gap-2")}><span className={cn("bg-red-500 text-white rounded-md px-2 max-w-fit")}>140</span> Total Anggota</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
};
