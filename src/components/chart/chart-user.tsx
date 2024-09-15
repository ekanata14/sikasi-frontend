"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  // @ts-ignore
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { datatype: "activeMember", member: 275, fill: "var(--color-activeMember)" },
  { datatype: "nonActiveMember", member: 200, fill: "var(--color-nonActiveMember)" },
  { datatype: "pending", member: 20, fill: "var(--color-pending)" },
]

const chartConfig = {
  activeMember: {
    label: "Aktif",
    color: "hsl(var(--chart-2))",
  },
  nonActiveMember: {
    label: "nonAktif",
    color: "hsl(var(--chart-3))",
  },
  pending: {
    label: "Pengajuan",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component() {
  const totalMember = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.member, 0)
  }, [])

  return (
    // @ts-ignore
    <Card className="flex flex-col lg:max-w-xl h-fit">
      {/* @ts-ignore */}
      <CardHeader className="items-center pb-0">
        {/* @ts-ignore */}
        <CardTitle>Statistik Anggota</CardTitle>
        {/* @ts-ignore */}
        <CardDescription>2024 - Sekarang</CardDescription>
      </CardHeader>
      {/* @ts-ignore */}
      <CardContent className="flex-1 pb-0">
        {/* @ts-ignore */}
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                // @ts-ignore
                <ChartTooltipContent hideLabel />
              }
            />
            <Pie
              data={chartData}
              dataKey="member"
              nameKey="datatype"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {totalMember.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Pengguna
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* @ts-ignore */}
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Terdapat 70 anggota baru! <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Menampilkan total anggota sejak aplikasi ini pertama kali efektif digunakan
        </div>
      </CardFooter>
    </Card>
  )
}
