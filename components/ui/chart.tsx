"use client"

import type * as React from "react"
import type { ChartConfig, ChartData } from "recharts/types/chart/generateCategoricalChart"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  ComposedChart as RechartsComposedChart,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function Chart({ children, className, ...props }: ChartProps) {
  return (
    <div className={cn("h-[350px] w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

interface ChartLineProps extends ChartConfig {
  data: ChartData[]
}

function ChartLine({ data, ...props }: ChartLineProps) {
  return <RechartsLineChart data={data} {...props} />
}

interface ChartBarProps extends ChartConfig {
  data: ChartData[]
}

function ChartBar({ data, ...props }: ChartBarProps) {
  return <RechartsBarChart data={data} {...props} />
}

interface ChartComposedProps extends ChartConfig {
  data: ChartData[]
}

function ChartComposed({ data, ...props }: ChartComposedProps) {
  return <RechartsComposedChart data={data} {...props} />
}

interface ChartPieProps extends ChartConfig {
  data: ChartData[]
}

function ChartPie({ data, ...props }: ChartPieProps) {
  return <RechartsPieChart data={data} {...props} />
}

interface ChartRadialBarProps extends ChartConfig {
  data: ChartData[]
}

function ChartRadialBar({ data, ...props }: ChartRadialBarProps) {
  return <RechartsRadialBarChart data={data} {...props} />
}

interface ChartTooltipProps extends React.ComponentProps<typeof Tooltip> {}

function ChartTooltip({ ...props }: ChartTooltipProps) {
  return (
    <Tooltip
      cursor={false}
      content={({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                {payload.map((entry) => (
                  <div key={entry.name} className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">{entry.name}</span>
                    <span className="font-bold text-foreground">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        }

        return null
      }}
      {...props}
    />
  )
}

export {
  Chart,
  ChartLine,
  ChartBar,
  ChartComposed,
  ChartPie,
  ChartRadialBar,
  ChartTooltip,
  //
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  Pie,
  Cell,
  RadialBar,
}
