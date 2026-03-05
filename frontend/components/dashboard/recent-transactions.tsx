"use client"

import {
  ShoppingCart,
  Music,
  DollarSign,
  Car,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const transactions = [
  {
    merchant: "Reliance Smart",
    detail: "Debit Card ****4291",
    category: "Groceries",
    date: "24 Oct 2023",
    amount: -8450,
    icon: ShoppingCart,
    iconBg: "bg-secondary",
    iconColor: "text-muted-foreground",
  },
  {
    merchant: "Spotify",
    detail: "Subscription • UPI",
    category: "Entertainment",
    date: "23 Oct 2023",
    amount: -999,
    icon: Music,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    merchant: "Tech Solutions India",
    detail: "Salary Deposit",
    category: "Income",
    date: "15 Oct 2023",
    amount: 185000,
    icon: DollarSign,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    merchant: "Ola",
    detail: "Ride • Credit Card",
    category: "Transport",
    date: "12 Oct 2023",
    amount: -2050,
    icon: Car,
    iconBg: "bg-secondary",
    iconColor: "text-muted-foreground",
  },
]

export function RecentTransactions() {
  return (
    <div className="xl:col-span-2 bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <h3 className="text-lg font-bold text-foreground">
          Recent Transactions
        </h3>
        <Link
          href="/dashboard/transactions"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View All
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-secondary/50">
            <tr>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Transaction
              </th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Date
              </th>
              <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((tx) => (
              <tr
                key={`${tx.merchant}-${tx.date}`}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "p-2 rounded-full",
                        tx.iconBg
                      )}
                    >
                      <tx.icon className={cn("size-4", tx.iconColor)} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {tx.merchant}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {tx.detail}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-secondary-foreground">
                  {tx.category}
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  {tx.date}
                </td>
                <td
                  className={cn(
                    "py-4 px-6 text-sm font-bold text-right",
                    tx.amount > 0 ? "text-emerald-600 dark:text-emerald-500" : "text-red-500 dark:text-red-400"
                  )}
                >
                  {tx.amount > 0 ? "+" : ""}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
