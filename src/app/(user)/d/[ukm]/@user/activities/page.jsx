import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export default function ActivitiesPage() {
  const Data = {
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

  const ActivitiesCard = Data.ukm.activities.map(activities =>
    <Card key={activities.id} className={cn("px-5 py-3 w-full bg-blue-600 text-white text-sm bg-[url('" + Data.ukm.logo + "')] bg-right-top bg-no-repeat bg-[length:100px]")}>
      <h3 className={"font-bold uppercase"}>{activities.name}</h3>
      <p>{activities.date}</p>
      <p>{activities.timeStart} - {activities.timeEnd}</p>
    </Card>
  );

  return (
      <main className={cn("w-full flex flex-col gap-4 min-h-screen")}>
        {/* Section 1: Bagian Activities dan Header */}
        <section>
          <div className={cn("pt-8 pb-4 px-4")}>
            <h1 className={cn("font-bold text-lg")}>Halaman Aktivitas UKM {Data.ukm.abbreviation}</h1>
            <p className="text-sm">Halo {Data.user.name},  silahkan klik salah satu aktivitas untuk melakukan absensi dan/atau melihat detil selengkapnya.</p>
          </div>
          <div className={cn("flex flex-col gap-2 justify-center w-full px-4")}>
            {ActivitiesCard}
          </div>
        </section>

      </main>
  );
}
