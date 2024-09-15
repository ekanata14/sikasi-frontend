
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
      <div className="grid lg:grid-cols-2 space-y-6 lg:space-y-0">
        <div className="space-y-6">
          <ChartCash />
          <ChartUser />
        </div>
        <div>
          <ActivitiesCard data={Data} />
        </div>
      </div>
    </>
  );
}
