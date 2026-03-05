"use client"

import { Progress } from "@/components/ui/progress"

export function SavingsRate() {
  const saved = 18500
  const total = 65000
  const percentage = Math.round((saved / total) * 100)
  const circumference = 2 * Math.PI * 16
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`

  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-2">Savings Rate</h3>
      <div className="flex items-center justify-between">
        <div className="relative size-32">
          <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="stroke-secondary"
              cx="18"
              cy="18"
              fill="none"
              r="16"
              strokeWidth="3"
            />
            <circle
              className="stroke-primary"
              cx="18"
              cy="18"
              fill="none"
              r="16"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-2xl font-bold text-foreground">
              {percentage}%
            </span>
            <span className="block text-[10px] text-muted-foreground uppercase tracking-wide">
              Target 30%
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-1 pl-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <div className="size-2 rounded-full bg-primary" />
              Saved
            </span>
            <span className="font-medium text-foreground">
              ₹{saved.toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <div className="size-2 rounded-full bg-secondary" />
              Remaining
            </span>
            <span className="font-medium text-foreground">
              ₹{(total - saved).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const topExpenses = [
  { label: "Housing & Utilities", percent: 45, color: "bg-primary" },
  { label: "Food & Dining", percent: 25, color: "bg-chart-2" },
  { label: "Entertainment", percent: 15, color: "bg-chart-2/50" },
]

export function TopExpenses() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-4">Top Expenses</h3>
      <div className="flex flex-col gap-4">
        {topExpenses.map((expense) => (
          <div key={expense.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-secondary-foreground font-medium">
                {expense.label}
              </span>
              <span className="text-foreground font-bold">
                {expense.percent}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className={`${expense.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${expense.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
