import { CreditCard, DollarSign, Megaphone, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

export default function UkmPage() {
  const ActivitiesCard = Data.ukm.activities.map((activities) => (
    <Card
      key={activities.id}
      className={"p-4 min-w-56 max-w-56 text-white fill-white bg-blue-600 text-center snap-start "}
    >
      <svg
        className={"w-full"}
        xmlns="http://www.w3.org/2000/svg"
        height="100px"
        viewBox="0 -960 960 960"
        width="24px"
      >
        <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
      </svg>
      <h3 className={"font-bold uppercase"}>{activities.name}</h3>
      <p className="font-semibold">{activities.date}</p>
      <p className="font-semibold">
        {activities.timeStart} - {activities.timeEnd}
      </p>
    </Card>
  ));

  return (
    <div className={cn("w-full flex flex-col gap-4")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section className={cn("mt-4")}>
        <div className={cn("pb-4 px-4 mb-4")}>
          <h1 className="font-bold text-2xl mb-4">Dashboard UKM {Data.ukm.abbreviation}</h1>
          <Alert className="mt-2 bg-blue-600 text-white">
            <Megaphone className="h-4 w-4" color="#ffffff" />
            <AlertTitle>Pengumuman Kegiatan</AlertTitle>
            <AlertDescription>
              Terdapat <Badge className={"mx-2 bg-white text-black"}>3</Badge> kegiatan yang akan dilaksanakan mendatang.
            </AlertDescription>
          </Alert>
        </div>
        <h2 className={"font-bold text-lg mb-4 px-4"}>Informasi Aktivitas</h2>
        <div className={cn("overflow-x-scroll flex gap-2 snap-x ml-4", "lg:overflow-clip lg:mx-auto lg:px-4 rounded-md")}>{ActivitiesCard}</div>
      </section>

      {/* Section 2: Bagian Kas */}
      <section className={cn("py-4 px-4")}>
        <h2 className={"font-bold text-lg mb-4"}>Informasi Kas</h2>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6"}>
          <Card className="bg-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Kewajiban</CardTitle>
              <DollarSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Data.ukm.cashUser}</div>
              <p className="text-xs">total kewajiban anda yang belum dilunaskan</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total KAS UKM</CardTitle>
              <CreditCard className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Data.ukm.totalCash}</div>
              <p className="text-xs">total kas ukm berdasarkan kas bulanan anggota</p>
            </CardContent>
          </Card>
        </div>
        <div className="border py-4 px-6 rounded-md bg-blue-600 text-white font-medium">
          <p className="mb-2">Kas merupakan kewajiban yang dibayar oleh setiap unit anggota dari organisasi. Kas akan digunakan sebagai dana yang digunakan organisasi dalam operasionalnya seperti perlombaan ataupun kegiatan.</p>
          <i> nb: Lakukan konsultasi jika terjadi permasalahan dalam berorganisasi. Solusi terbaik selalu siap diberikan. </i>
          <Link href={"/"} className="block mt-6"><Button variant="destructive" className="font-medium"><TriangleAlert color="#ffffff" className="mr-2" />Laporkan Masalah</Button></Link>
        </div>
      </section>
    </div>
  );
}
