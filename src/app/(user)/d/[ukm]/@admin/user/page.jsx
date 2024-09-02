import React from "react";
import { Button } from "~/components/ui/button";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "~/components/ui/table";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const UserPage = () => {
  return (
    <main className={cn("px-5 w-full min-h-screen")}>
      {/* Header */}
      <header className={cn("pt-20 pb-2")}>
        <h1 className="font-bold text-lg">Manajemen anggota UKM</h1>
        <p className="text-sm">
          Saat ini anda berada pada halaman manajemen anggota UKM {Data.ukm.abbreviation}
        </p>
      </header>

      {/* Section 1: Tabel User */}
      <section>
        <div className={cn("flex gap-4")}>
          <Button>Cetak Laporan</Button>
        </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Nama</TableCell>
                <TableCell>NIM</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Data.ukm.users.map((user, index) => (
                <TableRow key={user.nim}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.nim}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.created_at}</TableCell>
                  <TableCell>Edit|Delete</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </section>
    </main>
  );
};

export default UserPage;