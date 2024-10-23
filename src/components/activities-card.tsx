"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import React from "react";
import { usePathname } from "next/navigation";

export interface ActivitiesCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    ukm: {
      activities: {
        id: string;
        name: string;
        date: string;
        timeStart: string;
        timeEnd: string;
        place: string;
      }[];
    };
  };
}

const ActivitiesCard = React.forwardRef<HTMLDivElement, ActivitiesCardProps>(({ className, ...props }, ref) => {
  const currentPath = usePathname().split("/").pop();
  const { data } = props;

  return (
    <Card className="xl:col-span-2 lg:min-h-full lg:max-h-full">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Aktivitas</CardTitle>
          <CardDescription>
            Daftar aktivitas terbaru yang terjadi pada UKM
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link href={currentPath + "/activities"}>
            Lihat Semua
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Aktivitas</TableHead>
              <TableHead className="text-right">Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.ukm.activities.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="font-medium">{item.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.timeStart} - {item.timeEnd}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="font-medium">{item.date}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {item.place}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});
ActivitiesCard.displayName = "ActivitiesCard";

export default ActivitiesCard;
