import Link from "next/link";
import React from "react";
import QRScanner from "~/components/qrcode/qr-scanner";
import { Button } from "~/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const ActivitesPage = () => {
  return (
    <main className={cn("px-5 w-full min-h-screen")}>
      {/* Header */}
      <header className={cn("pt-20 pb-2")}>
        <h1 className="font-bold text-lg">Manajemen Aktivitas UKM</h1>
        <p className="text-sm">
          Saat ini anda berada pada halaman manajemen aktivitas UKM {Data.ukm.abbreviation}
        </p>
      </header>

      {/* Section 1: Tabel Activites */}
      <section>
        <div className={cn("flex gap-4")}>
          <Link href={"activities/create"}>
            <Button>Tambah Aktivitas</Button>
          </Link>
          <QRScanner/>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama Kegiatan</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Waktu Mulai</TableCell>
              <TableCell>Waktu Selesai</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Data.ukm.activities.map((activity, index) => (
              <TableRow key={activity.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{activity.name}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.timeStart}</TableCell>
                <TableCell>{activity.timeEnd}</TableCell>
                <TableCell>Ubah|Hapus</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default ActivitesPage;