"use client";

import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cash = {
  id: string
  nim: string
  name: string
  status: "lunas" | "belum lunas"
  amount: number
  date: string
}

export const columns: ColumnDef<Cash>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        // @ts-ignore
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = z.string().date();
      const formatted = date.parse(row.getValue("date"));
 
      return <div className="px-4">{formatted}</div>;
    },
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
    accessorKey: "name",
    header: "Nama"
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
    accessorKey: "amount",
    header: "Jumlah",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      }).format(amount);
 
      return formatted;
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
              onClick={() => navigator.clipboard.writeText(user.nim)}
            >
              Copy NIM
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* @ts-ignore */}
            <DropdownMenuItem>Lihat Detail Kas</DropdownMenuItem>
            { user.status === "belum lunas" && (
                // @ts-ignore
                <DropdownMenuItem>Tandai Lunas</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
