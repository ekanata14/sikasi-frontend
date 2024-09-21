import Link from "next/link";
import { Card } from "~/components/ui/card";
import { Data } from "~/data/data";
import { cn } from "~/lib/utils";

export default function ActivitiesPage() {

  const ActivitiesCard = Data.ukm.activities.map(activities =>
    <Link key={activities.id} href={"activities/detail/"+activities.id}>
      <Card className={cn("px-5 py-3 w-full border-slate-300 text-slate-800 text-sm bg-[url('" + Data.ukm.logo + "')] bg-right-top bg-no-repeat bg-[length:100px]")}>
        <h3 className={"font-bold uppercase"}>{activities.name}</h3>
        <p>{activities.date}</p>
        <p>{activities.timeStart} - {activities.timeEnd}</p>
        <p>{activities.place}</p>
      </Card>
    </Link>
  );

  return (
    <main className={cn("w-full flex flex-col gap-4")}>
      {/* Section 1: Bagian Activities dan Header */}
      <section className={cn("mt-4")}>
        <div className={cn("pb-4 px-4")}>
          <h1 className={cn("font-bold text-2xl mb-2")}>Aktivitas UKM {Data.ukm.abbreviation}</h1>
          <p className="text-base font-medium">Halo {Data.user.name},  silahkan klik salah satu aktivitas untuk melakukan absensi dan/atau melihat detail selengkapnya.</p>
        </div>
        <div className={cn("flex flex-col gap-2 justify-center w-full px-4")}>
          {ActivitiesCard}
        </div>
      </section>

    </main>
  );
}
