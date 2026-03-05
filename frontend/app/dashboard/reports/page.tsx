"use client"

import {
  FileText,
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const monthlySummaries = [
  {
    month: "October 2023",
    income: 4500,
    expenses: 2340,
    savings: 2160,
    topCategory: "Housing",
    transactions: 42,
  },
  {
    month: "September 2023",
    income: 4800,
    expenses: 1980,
    savings: 2820,
    topCategory: "Food & Dining",
    transactions: 38,
  },
  {
    month: "August 2023",
    income: 4500,
    expenses: 2450,
    savings: 2050,
    topCategory: "Housing",
    transactions: 45,
  },
]

const reportTypes = [
  {
    title: "Monthly Spending Report",
    description: "Detailed breakdown of all expenses by category",
    icon: TrendingDown,
    formats: ["PDF", "Excel"],
  },
  {
    title: "Income Summary",
    description: "All income sources and trends",
    icon: TrendingUp,
    formats: ["PDF", "Excel"],
  },
  {
    title: "Tax Report",
    description: "Tax-ready summary of deductible expenses",
    icon: DollarSign,
    formats: ["PDF"],
  },
  {
    title: "Full Financial Statement",
    description: "Complete financial overview with charts and analysis",
    icon: FileText,
    formats: ["PDF"],
  },
]

export default function ReportsPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Financial Reports
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Generate and export detailed financial reports
          </p>
        </div>
        <Select defaultValue="oct">
          <SelectTrigger className="w-48 bg-card border-border text-foreground">
            <Calendar className="size-4 text-muted-foreground mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oct">October 2023</SelectItem>
            <SelectItem value="sep">September 2023</SelectItem>
            <SelectItem value="aug">August 2023</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Monthly Summaries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {monthlySummaries.map((summary) => (
          <div
            key={summary.month}
            className="bg-card p-5 rounded-xl border border-border shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-foreground">
                {summary.month}
              </h3>
              <span className="text-xs text-muted-foreground">
                {summary.transactions} transactions
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Income</span>
                <span className="text-sm font-bold text-success">
                  +₹{summary.income.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Expenses</span>
                <span className="text-sm font-bold text-foreground">
                  -₹{summary.expenses.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  Net Savings
                </span>
                <span className="text-sm font-bold text-primary">
                  ₹{summary.savings.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Types */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">
          Generate Reports
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reportTypes.map((report) => (
            <div
              key={report.title}
              className="bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
                  <report.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {report.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {report.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {report.formats.map((format) => (
                  <Button
                    key={format}
                    variant="outline"
                    size="sm"
                    className="gap-2 text-foreground"
                  >
                    <Download className="size-3.5" />
                    Export {format}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
