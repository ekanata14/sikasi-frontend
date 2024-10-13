
import { columns, User } from "./column-user";
import { DataTable } from "./table-user";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nim: "220040054",
      name: "Eka Nata",
      status: "mengajukan",
      email: "m@example.com",
      phone: "081238275881",
      createdAt: "2021-09-10",
    },
    {
      id: "728ed52f",
      nim: "220040036",
      name: "Sufyan",
      status: "aktif",
      email: "a@example.com",
      phone: "08123456789",
      createdAt: "2021-10-10",
    },
    {
      id: "728ed52f",
      nim: "220040056",
      name: "Putu Angel",
      status: "mengajukan",
      email: "b@example.com",
      phone: "08123456789",
      createdAt: "2021-08-10",
    },
    // ...
  ];
}

export default async function UsersPage() {
  const data = await getData() ?? null;

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Manejemen Pengguna</h1>
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
