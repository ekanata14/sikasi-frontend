import React from "react";
import ChartAbsence from "~/components/chart/chart-absence";
import QRAbsence from "~/components/qrcode/qr-absence";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const DetailPage = () => {
  return (
    <main className={cn("w-full flex flex-col gap-4 min-h-screen px-4")}>

      <header>
        <div className={cn("pt-8 pb-4")}>
          <h1 className={cn("font-bold text-lg")}>Detail Aktivitas UKM {Data.ukm.abbreviation}</h1>
          <p className="text-sm">Halo {Data.user.name},  silahkan lakukan absensi tepat pada waktu yang telah ditentukan.</p>
        </div>
      </header>

      <section className={cn("gap-3 grid")}>
        <div>
          <p className={cn("font-light text-sm")}>Nama Aktivitas</p>
          <h2 className={cn("font-bold")}>Pelatihan ke-8</h2>
        </div>
        <div>
          <p className={cn("font-light text-sm")}>Waktu Pelaksanaan</p>
          <h2 className={cn("font-bold")}>15.00 WITA - 18.00 WITA</h2>
        </div>
        <div>
          <p className={cn("font-light text-sm")}>Tempat Pelaksanaan</p>
          <h2 className={cn("font-bold")}>Laboratorium Networing Lt.4</h2>
        </div>
        <div>
          <p className={cn("font-light text-sm")}>Absensi Kehadiran</p>
          <ChartAbsence />
        </div>
      </section>
      <div className={cn("pt-4 w-full")}>
        <QRAbsence />
      </div>
    </main>
  );
};

export default DetailPage;