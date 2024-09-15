"use client";

import { z } from "zod";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Activity = {
  id: string
  name: string
  date: string
  startAt: string
  endAt: string
}

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "name",
    header: "Nama"
  },
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
    accessorKey: "startAt",
    header: "Mulai"
  },
  {
    accessorKey: "endAt",
    header: "Selesai"
  },
  {
    id: "actions",
    cell: () => {
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
            <DropdownMenuItem><Link href={"activities/1/edit"}>Ubah Aktivitas</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
