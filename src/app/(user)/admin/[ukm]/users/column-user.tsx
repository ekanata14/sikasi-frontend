"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string
  nim: string
  name: string
  phone: string
  status: "mengajukan" | "aktif" | "non-aktif"
  email: string
  createdAt: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        // @ts-ignore
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.getValue("email")}</div>;
    }
  },
  {
    accessorKey: "name",
    header: "Nama"
  },
  {
    accessorKey: "nim",
    header: ({ column }) => {
      return (
        // @ts-ignore
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NIM
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "No. Telepon"
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        // @ts-ignore
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* @ts-ignore */}
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          {/* @ts-ignore */}
          <DropdownMenuContent align="end">
            {/* @ts-ignore */}
            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
            {/* @ts-ignore */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.phone)}
            >
              Copy Nomor Telepon
            </DropdownMenuItem>
            {/* @ts-ignore */}
            <DropdownMenuItem
              onClick={() => {
                if(user.phone.charAt(0) === "0") {
                  user.phone = "62" + user.phone.slice(1);
                }
                window.open("https://wa.me/" + user.phone, "_blank");
              }}
            >
              Chat via Whatsapp
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* @ts-ignore */}
            <DropdownMenuItem>Lihat Pengguna</DropdownMenuItem>
            { user.status === "mengajukan" && (
                // @ts-ignore
                <DropdownMenuItem>Setujui Permohonan</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
