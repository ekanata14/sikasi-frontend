"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { CirclePlus, Printer } from "lucide-react";
import Link from "next/link";
import QRScanner from "~/components/qrcode/qr-scanner";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 6,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
      columnFilters,
    }
  });

  return (
    <div>
      <div className="flex gap-2 py-4 justify-between lg:gap-0 lg:items-center">
        <Input
          // @ts-ignore
          placeholder="Filter Tanggal"
          value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div className="flex gap-2">
          {/* @ts-ignore */}
          <Link href={"activities/create"}>
            {/* @ts-ignore */}
            <Button className="max-w-sm space-x-2"><CirclePlus /><span className="hidden lg:block">Tambah Aktivitas</span></Button>
          </Link>
          {/* @ts-ignore */}
          <Button className="max-w-sm space-x-2"><Printer /><span className="hidden lg:block">Cetak</span></Button>
          {/* @ts-ignore */}
          <QRScanner/>
        </div>
      </div>
      <div className="rounded-md border w-full overflow-scroll lg:w-auto lg:overflow-visible">
        {/* @ts-ignore */}
        <Table>
          {/* @ts-ignore */}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              // @ts-ignore
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    // @ts-ignore
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          {/* @ts-ignore */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                // @ts-ignore
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    // @ts-ignore
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              // @ts-ignore
              <TableRow>
                {/* @ts-ignore */}
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* @ts-ignore */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        {/* @ts-ignore */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
