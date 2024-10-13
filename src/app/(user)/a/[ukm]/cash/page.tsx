
import { columns, Cash } from "./column-cash";
import { DataTable } from "./table-cash";

async function getData(): Promise<Cash[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nim: "220040054",
      status: "belum lunas",
      name: "De Rey",
      amount: 10000,
      date: "2021-09-10"
    },
    {
      id: "728ed52f",
      nim: "220040036",
      status: "lunas",
      name: "Pal Go",
      amount: 10000,
      date: "2021-10-10"
    },
    {
      id: "728ed52f",
      nim: "220040056",
      status: "belum lunas",
      name: "Riprama",
      amount: 10000,
      date: "2021-08-10"
    },
    // ...
  ];
}

export default async function CashPage() {
  const data = await getData() ?? null;

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manejemen Kas UKM</h1>
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
