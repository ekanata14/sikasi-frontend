import React from "react";
import Chart from "~/components/chart/chart";
import ChartPie from "~/components/chart/chart-pie";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const CashPage = () => {
  return (
    <main className={cn("px-5 w-full min-h-screen")}>
      {/* Header */}
      <header className={cn("pt-20 pb-2")}>
        <h1 className="font-bold text-lg">Manajemen KAS UKM</h1>
        <p className="text-sm">
          Saat ini anda berada pada halaman manajemen KAS UKM {Data.ukm.abbreviation}
        </p>
      </header>

      {/* Section 1: Chart */}
      <section className={cn("grid gap-4 py-2")}>
        <div className={cn("py-2")}>
          <Button>Cetak Laporan</Button>
        </div>
        <ChartPie />
        <Chart ChartType="bar" />
      </section>

      {/* Section 2: Tabel Activites */}
      <section>
        <Label htmlFor="search">Search</Label>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Type here..." id="search" />
          <Button type="submit">Search</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Tanggal</TableCell>
              <TableCell>NIM</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Jumlah</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data.ukm.cash.map((cash) => (
              <TableRow key={cash.id}>
                <TableCell>{cash.date}</TableCell>
                <TableCell>{cash.nim}</TableCell>
                <TableCell>{cash.name}</TableCell>
                <TableCell>{cash.status}</TableCell>
                <TableCell>{cash.amount}</TableCell>
                <TableCell>Ubah|Hapus</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default CashPage;