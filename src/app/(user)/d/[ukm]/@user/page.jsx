import { CircleDollarSign, Wallet } from "lucide-react";
import { Card } from "~/components/ui/card";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

export default function UkmPage() {
  const ActivitiesCard = Data.ukm.activities.map((activities) => (
    <Card
      key={activities.id}
      className={"p-4 min-w-56 max-w-56 bg-blue-600 text-white text-center snap-start "}
    >
      <svg
        className={"w-full"}
        xmlns="http://www.w3.org/2000/svg"
        height="100px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
      </svg>
      <h3 className={"font-bold uppercase"}>{activities.name}</h3>
      <p>{activities.date}</p>
      <p>
        {activities.timeStart} - {activities.timeEnd}
      </p>
    </Card>
  ));

  return (
    <div className={cn("w-full flex flex-col gap-4")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section className={cn("mt-4")}>
        <div className={cn("pt-8 pb-8 px-4")}>
          <h1 className="font-bold text-2xl mb-2">Dashboard UKM {Data.ukm.abbreviation}</h1>
          <p className="text-base font-medium">
            Halo {Data.user.name}, selamat datang dihalaman dashboard UKM {Data.ukm.abbreviation}
          </p>
        </div>
        <div className={cn("overflow-x-scroll flex gap-2 snap-x ml-4", "lg:max-w-7xl lg:mx-auto lg:px-4")}>{ActivitiesCard}</div>
      </section>

      {/* Section 2: Bagian Kas */}
      <section className={cn("py-4 px-4")}>
        <h2 className={"font-bold text-2xl mb-4"}>Informasi Kas Anda</h2>
        <div className={"grid grid-cols-1 xs:grid-cols-2 gap-2 mb-6"}>
          <Card className="bg-red-500 py-6 px-2 text-white text-center">
            <CircleDollarSign
              size={48}
              className="w-full self-center mb-4"
            />
            <h4 className="text-xl font-semibold mb-4">{Data.ukm.cashUser}</h4>
            <p className={"text-base px-4 font-medium"}>Total belum dibayarkan</p>
          </Card>
          <Card className="bg-green-500 py-6 px-2 text-white text-center">
            <Wallet
              size={48}
              className="w-full self-center mb-4"
            />
            <h4 className="text-xl font-semibold mb-4">{Data.ukm.totalCash}</h4>
            <p className={"text-base px-4 font-medium"}>Total sudah dibayarkan</p>
          </Card>
        </div>
        <p className="mb-5">Kas merupakan kewajiban yang dibayar oleh setiap unit anggota dari organisasi. Kas akan digunakan sebagai dana yang digunakan organisasi dalam operasionalnya seperti perlombaan ataupun kegiatan.</p>
        <i> nb: Lakukan konsultasi jika terjadi permasalahan dalam berorganisasi. Solusi terbaik selalu siap diberikan. </i>
      </section>
    </div>
  );
}
