import React from "react";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";
import { Cash, columns } from "./column-cash";
import { DataTable } from "./table-cash";

async function getData(): Promise<Cash[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nim: "220040054",
      status: "belum lunas",
      name: "De Rey",
      amount: 10000,
      date: "2021-09-10"
    },
    {
      id: "728ed52f",
      nim: "220040036",
      status: "lunas",
      name: "Pal Go",
      amount: 10000,
      date: "2021-10-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "belum lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    // ...
  ];
}

export default async function CashPage() {
  const data = await getData() ?? null;

  return (
    <main className={cn("w-full px-4 flex flex-col gap-4")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section className="mt-4">
        <div className={cn("pb-4")}>
          <h1 className={cn("font-bold text-2xl mb-2")}>KAS UKM {Data.ukm.abbreviation}</h1>
          <p className="text-base font-medium">Halo {Data.user.name}, berikut adalah rekapan pendaftaran mengenai kas anda. Silahkan hubungi bendahara jika terjadi kesalahan data.</p>
        </div>
      </section>

      {/* Section 2: Tabel Kas */}
      <section>
        {data ? (
          <DataTable columns={columns} data={data} />
        ) : (
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                Data tidak ditemukan
              </h3>
              <p className="text-sm text-muted-foreground">
                Silahkan tambahkan data atau hubungi tim support
              </p>
              {/* <Button className="mt-4">Add Product</Button> */}
            </div>
          </div>
        )}
      </section>

    </main>
  );
};