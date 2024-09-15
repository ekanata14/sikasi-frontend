import { Check, X } from "lucide-react";
import React from "react";
// import ChartAbsence from "~/components/chart/chart-absence";
import QRAbsence from "~/components/qrcode/qr-absence";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

const DetailPage = () => {
  const statusAbsence = false;

  return (
    <main className={cn("w-full flex flex-col gap-4 px-4 pb-10")}>

      <header>
        <div className={cn("pt-8 pb-4")}>
          <h1 className={cn("font-bold text-lg")}>Detail Aktivitas UKM {Data.ukm.abbreviation}</h1>
          <p className="text-sm">Halo {Data.user.name},  silahkan lakukan absensi tepat pada waktu yang telah ditentukan.</p>
        </div>
      </header>

      <section className={cn("gap-3 grid lg:grid-cols-2")}>
        <div className={cn("gap-3 grid")}>
          <div>
            <p className={cn("font-light text-sm")}>Nama Aktivitas</p>
            <h2 className={cn("font-bold lg:text-2xl")}>Pelatihan ke-8</h2>
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
            <p className={cn("font-light text-sm")}>Status Absensi Anda</p>
            {statusAbsence ? (
              <div className={cn("flex gap-2 text-green-500")}>
                <Check />
                <h2 className={cn("font-bold")}>Sudah Absensi</h2>
              </div>
            ) : (
              <div className={cn("flex gap-2 text-red-500")}>
                <X />
                <h2 className={cn("font-bold")}>Belum Absensi</h2>
              </div>
            )
            }
          </div>
          <div className={cn("pt-4 w-full")}>
            <QRAbsence />
          </div>
        </div>
        <div>
          <p className={cn("font-light text-sm lg:text-center")}>Data Absensi Kehadiran</p>
          {/* <ChartAbsence /> */}
        </div>
      </section>
    </main>
  );
};

export default DetailPage;