import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { cn } from '~/lib/utils';

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
  }

  return (
    <main className={cn("w-full flex flex-col gap-4 min-h-screen")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section>
        <div className={cn("pt-8 pb-4 px-4")}>
          <h1 className={cn("font-bold text-lg")}>KAS UKM {Temp.ukm.abbreviation}</h1>
          <p className="text-sm">Halo {Temp.user.name}, berikut adalah rekapan pendaftaran mengenai kas anda. Silahkan hubungi bendahara jika terjadi kesalahan data.</p>
        </div>
      </section>

      <section>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama Kegiatan</TableCell>
              <TableCell>Tanggal</TableCell>
              <TableCell>Waktu Mulai</TableCell>
              <TableCell>Waktu Selesai</TableCell>
            </TableRow>
            <TableBody>
              {Temp.ukm.activities.map((activity, index) => (
                <TableRow key={activity.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{activity.name}</TableCell>
                  <TableCell>{activity.date}</TableCell>
                  <TableCell>{activity.timeStart}</TableCell>
                  <TableCell>{activity.timeEnd}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableHead>
        </Table>
      </section>

    </main>
  );
};