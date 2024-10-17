"use client";

import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export default function ChartCash() {
  return (
    <Card className="lg:max-w-xl h-fit">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>Total Kas Tahun 2024</CardDescription>
        <CardTitle className="text-4xl">
          {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(300000)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            steps: {
              label: "rupiah",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <BarChart
            accessibilityLayer
            margin={{
              left: -4,
              right: -4,
            }}
            data={[
              {
                date: "2024-01-01",
                rupiah: 2000,
              },
              {
                date: "2024-02-02",
                rupiah: 2100,
              },
              {
                date: "2024-03-03",
                rupiah: 2200,
              },
              {
                date: "2024-04-04",
                rupiah: 1300,
              },
              {
                date: "2024-05-05",
                rupiah: 1400,
              },
              {
                date: "2024-06-06",
                rupiah: 2500,
              },
              {
                date: "2024-07-07",
                rupiah: 1600,
              },
            ]}
          >
            <Bar
              dataKey="rupiah"
              fill="var(--color-steps)"
              radius={5}
              fillOpacity={0.6}
              activeBar={<Rectangle fillOpacity={0.8} />}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  // weekday: "short",
                  month: "short",
                });
              }}
            />
            <ChartTooltip
              defaultIndex={2}
              content={
                <ChartTooltipContent
                  hideIndicator
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                  }}
                />
              }
              cursor={false}
            />
            <ReferenceLine
              y={1200}
              stroke="hsl(var(--muted-foreground))"
              strokeDasharray="3 3"
              strokeWidth={1}
            >
              <Label
                position="insideBottomLeft"
                value="Jumlah rata-rata"
                offset={10}
                fill="hsl(var(--foreground))"
              />
              <Label
                position="insideTopLeft"
                value={new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(300000)}
                className="text-lg"
                fill="hsl(var(--foreground))"
                offset={10}
                startOffset={100}
              />
            </ReferenceLine>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          Bulan ini pemasukan uang kas yang dibayarkan adalah{" "}
          <span className="font-medium text-foreground">Rp. 20.000,00</span>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
