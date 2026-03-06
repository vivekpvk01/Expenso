"use client"

import {
  Landmark,
  CreditCard,
  IndianRupee,
  PiggyBank,
  ArrowUp,
  ArrowDown,
  Minus,
} from "lucide-react"
import { cn } from "@/lib/utils"

type TrendOption = "up" | "down" | "neutral";

const stats = [
  {
    label: "Total Balance",
    value: "₹1,25,000",
    change: "+5.2%",
    trend: "up" as TrendOption,
    icon: Landmark,
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Monthly Spend",
    value: "₹32,500",
    change: "+1.2%",
    trend: "down" as TrendOption,
    icon: CreditCard,
    iconBg: "bg-red-100 dark:bg-red-900/40",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    label: "Income",
    value: "₹75,000",
    change: "0.0%",
    trend: "neutral" as TrendOption,
    icon: IndianRupee,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    label: "Savings",
    value: "₹18,500",
    change: "+8.5%",
    trend: "up" as TrendOption,
    icon: PiggyBank,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex justify-between items-start mb-4">
            <div
              className={cn("p-2 rounded-lg", stat.iconBg)}
            >
              <stat.icon className={cn("size-5", stat.iconColor)} />
            </div>
            <span
              className={cn(
                "flex items-center text-xs font-medium px-2 py-0.5 rounded-full gap-0.5",
                stat.trend === "up" && stat.label !== "Monthly Spend"
                  ? "text-success bg-success/10"
                  : stat.trend === "up" && stat.label === "Monthly Spend"
                    ? "text-destructive bg-destructive/10"
                    : "text-muted-foreground bg-secondary"
              )}
            >
              {stat.change}
              {stat.trend === "up" ? (
                <ArrowUp className="size-3" />
              ) : stat.trend === "down" ? (
                <ArrowDown className="size-3" />
              ) : (
                <Minus className="size-3" />
              )}
            </span>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            {stat.label}
          </p>
          <h3 className="text-2xl font-bold text-foreground mt-1">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  )
}
