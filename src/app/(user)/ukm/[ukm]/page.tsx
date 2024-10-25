import { Activity, BadgeDollarSign, CheckCircle, Circle, CreditCard, DollarSign, Megaphone, PiggyBank, TriangleAlert, User } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";
import { DataTable } from "./(partials)/table-cash";
import { Cash, columns } from "./(partials)/column-cash";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";

async function getData(): Promise<Cash[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nim: "220040054",
      status: "Belum Lunas",
      name: "De Rey",
      amount: 10000,
      date: "2021-09-10"
    },
    {
      id: "728ed52f",
      nim: "220040036",
      status: "Lunas",
      name: "Pal Go",
      amount: 10000,
      date: "2021-10-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "Belum Lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    // ...
  ];
}

export default async function UkmPage() {
  const data = await getData() ?? null;


  const ActivitiesCard = Data.ukm.activities.slice(0, 5).map((activities) => (
    <Card
      key={activities.id}
      className={"snap-start"}
    >
      <div key={activities.id}>
        <div className={cn("px-5 py-3 w-full border-slate-300 bg-[#98C8FF] text-black text-sm bg-right-top bg-no-repeat bg-[length:100px] relative overflow-hidden")}>
          <Image src={Data.ukm.logo} alt="logo" className="absolute -right-8 top-0 h-auto opacity-50 w-auto z-10" width={70} height={70} priority={true} />
          <div className="z-40">
            <h3 className={"font-bold flex uppercase"}>
              {activities.name}
                <span className="flex flex-row items-center">
                  {false ? <CheckCircle className="w-3 ml-1 h-fit"/> : <Circle className="w-3 ml-1 h-fit"/>}
                </span>
              </h3>
            <p>{activities.date}</p>
            <p>{activities.timeStart} - {activities.timeEnd}</p>
            <p>{activities.place}</p>
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <div className={cn("grid gap-4", "lg:grid-cols-4")}>
      <div className={cn("bg-white border-slate-300 border w-full h-full rounded-md shadow-sm p-4 lg:flex lg:flex-col lg:justify-between")}>
        <div className="grid gap-2 lg:h-auto h-56 overflow-scroll snap-proximity snap-y lg:overflow-auto">
          {ActivitiesCard}
        </div>
        <div className="w-full text-center text-sm text-zinc-700">
          "Selalu ingat untuk lakukan absensi ya!"
        </div>
      </div>
      <div className={cn("grid gap-4 items-start", "lg:col-span-3 lg:flex lg:flex-col")}>
        <div className="bg-white w-full border-slate-300 border rounded-md shadow-sm lg:h-36 p-4">
          <div className="w-full h-full grid lg:justify-start gap-2 lg:grid-cols-4 grid-flow-cols">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-sm font-medium">Total Kewajiban</CardTitle>
                <DollarSign className="h-4 w-4" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">Rp. 90.000</div>
                <p className="text-xs text-zinc-700">Total kewajiban belum dibayarkan</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-sm font-medium">Total Dibayar</CardTitle>
                <PiggyBank className="h-4 w-4" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">Rp. 130.000</div>
                <p className="text-xs text-zinc-700">Total kewajiban telah dibayarkan</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-sm font-medium">Keaktifan Anda</CardTitle>
                <Activity className="h-4 w-4" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">8 <span className="text-sm">dari</span> 12 <span className="text-sm">Kegiatan</span></div>
                <p className="text-xs text-zinc-700">Perbandingan absensi kehadiran</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 pb-0">
                <CardTitle className="text-sm font-medium">Total Pengguna</CardTitle>
                <User className="h-4 w-4" />
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-2xl font-bold">70 <span className="text-sm">Pengguna</span></div>
                <p className="text-xs text-zinc-700">Total pengguna bergabung</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="overflow-hidden lg:w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
