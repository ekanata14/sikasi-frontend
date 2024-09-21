import React from "react";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

export default async function CashPage() {

  const Temp = {
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
  };

  return (
    <main className={cn("w-full px-4 flex flex-col gap-4")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section className="mt-4">
        <div className={cn("pb-4")}>
          <h1 className={cn("font-bold text-2xl mb-2")}>KAS UKM {Temp.ukm.abbreviation}</h1>
          <p className="text-base font-medium">Halo {Temp.user.name}, berikut adalah rekapan pendaftaran mengenai kas anda. Silahkan hubungi bendahara jika terjadi kesalahan data.</p>
        </div>
      </section>

      {/* Section 2: Tabel Kas */}
      <section>
        <Label htmlFor="search">Urutkan sesuai</Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="terbaru">Terbaru</SelectItem>
                <SelectItem value="terlama">Terlawas</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Tanggal</TableCell>
              <TableCell>NIM</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Jumlah</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data.ukm.mrKesal.map((cash) => (
              <TableRow key={cash.nim}>
                <TableCell>{cash.date}</TableCell>
                <TableCell>{cash.nim}</TableCell>
                <TableCell>{cash.name}</TableCell>
                <TableCell>{cash.status}</TableCell>
                <TableCell>{cash.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

    </main>
  );
};