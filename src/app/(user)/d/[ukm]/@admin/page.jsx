
import ChartCash from "~/components/chart/chart-cash";
import ChartUser from "~/components/chart/chart-user";
import ActivitiesCard from "~/components/activities-card";
import { Data } from "~/data/data";

export default function UkmPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="space-y-6">
          <ChartCash />
          <ChartUser />
        </div>
        <div className="xl:col-span-2">
          <ActivitiesCard data={Data} />
        </div>
      </div>
    </>
  );
}
