"use client"

import { UtensilsCrossed, ShoppingBag, Car } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const budgets = [
  {
    label: "Food & Dining",
    spent: 4500,
    limit: 6000,
    icon: UtensilsCrossed,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Shopping",
    spent: 3200,
    limit: 3000,
    icon: ShoppingBag,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    label: "Transport",
    spent: 1200,
    limit: 2000,
    icon: Car,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
]

export function BudgetHealth() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-bold text-foreground mb-6">Budget Health</h3>
      <div className="flex flex-col gap-6">
        {budgets.map((budget) => {
          const percentage = Math.min(
            Math.round((budget.spent / budget.limit) * 100),
            100
          )
          const isOver = budget.spent > budget.limit
          const isNear = percentage >= 75 && !isOver
          const barColor = isOver
            ? "bg-destructive"
            : isNear
              ? "bg-warning"
              : "bg-success"

          return (
            <div key={budget.label}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg", budget.iconBg)}>
                    <budget.icon className={cn("size-4", budget.iconColor)} />
                  </div>
                  <span className="text-sm font-medium text-secondary-foreground">
                    {budget.label}
                  </span>
                </div>
                <span
                  className={cn(
                    "text-xs font-bold",
                    isOver ? "text-destructive" : "text-muted-foreground"
                  )}
                >
                  ₹{budget.spent.toLocaleString('en-IN')} / ₹{budget.limit.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    barColor
                  )}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p
                className={cn(
                  "text-right text-[10px] mt-1",
                  isOver ? "text-destructive" : "text-muted-foreground"
                )}
              >
                {isOver ? "Over Budget!" : `${percentage}% Used`}
              </p>
            </div>
          )
        })}
      </div>
      <Link
        href="/dashboard/budgets"
        className="block w-full mt-6 py-2.5 rounded-lg border border-border text-sm font-medium text-secondary-foreground hover:bg-secondary transition-colors text-center"
      >
        Manage Budgets
      </Link>
    </div>
  )
}
