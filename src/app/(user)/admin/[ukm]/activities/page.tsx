import { columns, Activity } from "./column-activity";
import { DataTable } from "./table-activity";

async function getData(): Promise<Activity[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Pelatihan 10",
      date: "2021-09-10",
      startAt: "15:00",
      endAt: "18:00",
    },
    {
      id: "728ed53f",
      name: "Pelatihan 11",
      date: "2021-09-17",
      startAt: "15:00",
      endAt: "18:00",
    },
    {
      id: "728ed54f",
      name: "Pelatihan 12",
      date: "2021-09-24",
      startAt: "15:00",
      endAt: "18:00",
    },
    
    // ...
  ];
}

export default async function ActivitiesPage() {
  const data = await getData() ?? null;

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manejemen Aktivitas UKM</h1>
      </div>
      {data ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Data tidak ditemukan
            </h3>
            <p className="text-sm text-muted-foreground">
              Silahkan tambahkan data atau hubungi tim support
            </p>
            {/* <Button className="mt-4">Add Product</Button> */}
          </div>
        </div>
      )}
    </>
  );
}
