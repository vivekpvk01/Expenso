"use client"

import { useState, useMemo } from "react"
import {
  Search,
  Filter,
  ShoppingCart,
  Music,
  DollarSign,
  Car,
  Home,
  Zap,
  Film,
  Coffee,
  Shirt,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const iconMap: Record<string, typeof ShoppingCart> = {
  Groceries: ShoppingCart,
  Entertainment: Music,
  Income: DollarSign,
  Transport: Car,
  Housing: Home,
  Utilities: Zap,
  Streaming: Film,
  "Food & Dining": Coffee,
  Shopping: Shirt,
}

const allTransactions = [
  { id: 1, merchant: "Reliance Smart", detail: "Debit Card ****4291", category: "Groceries", date: "2023-10-24", method: "Debit Card", amount: -8450 },
  { id: 2, merchant: "Spotify", detail: "Subscription", category: "Entertainment", date: "2023-10-23", method: "UPI", amount: -999 },
  { id: 3, merchant: "Tech Solutions India", detail: "Salary Deposit", category: "Income", date: "2023-10-15", method: "Bank Transfer", amount: 185000 },
  { id: 4, merchant: "Ola", detail: "Ride", category: "Transport", date: "2023-10-12", method: "Credit Card", amount: -2050 },
  { id: 5, merchant: "Amazon Prime", detail: "Subscription", category: "Entertainment", date: "2023-10-10", method: "Credit Card", amount: -1499 },
  { id: 6, merchant: "BigBasket", detail: "Weekly Groceries", category: "Groceries", date: "2023-10-09", method: "Debit Card", amount: -12500 },
  { id: 7, merchant: "BSNL Electricity", detail: "Monthly Bill", category: "Utilities", date: "2023-10-08", method: "Auto-Pay", amount: -8500 },
  { id: 8, merchant: "Swiggy", detail: "Lunch", category: "Food & Dining", date: "2023-10-07", method: "PhonePe", amount: -1425 },
  { id: 9, merchant: "Flipkart", detail: "Online Purchase", category: "Shopping", date: "2023-10-06", method: "Credit Card", amount: -6800 },
  { id: 10, merchant: "Freelance Client", detail: "Project Payment", category: "Income", date: "2023-10-05", method: "Bank Transfer", amount: 75000 },
  { id: 11, merchant: "Petrol Pump", detail: "Fuel", category: "Transport", date: "2023-10-04", method: "Debit Card", amount: -4200 },
  { id: 12, merchant: "Rent Payment", detail: "Monthly Rent", category: "Housing", date: "2023-10-01", method: "Bank Transfer", amount: -50000 },
  { id: 13, merchant: "Zomato", detail: "Coffee & Snacks", category: "Food & Dining", date: "2023-09-30", method: "Credit Card", amount: -650 },
  { id: 14, merchant: "Amazon", detail: "Household Items", category: "Shopping", date: "2023-09-29", method: "Debit Card", amount: -5250 },
  { id: 15, merchant: "Gym India", detail: "Monthly Fee", category: "Entertainment", date: "2023-09-28", method: "Auto-Pay", amount: -4999 },
]

const categories = ["All", "Groceries", "Entertainment", "Income", "Transport", "Streaming", "Utilities", "Food & Dining", "Shopping", "Housing"]
const PAGE_SIZE = 8

export default function TransactionsPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortBy, setSortBy] = useState<"date" | "amount">("date")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    let data = [...allTransactions]
    if (search) {
      data = data.filter(
        (t) =>
          t.merchant.toLowerCase().includes(search.toLowerCase()) ||
          t.category.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (category !== "All") {
      data = data.filter((t) => t.category === category)
    }
    data.sort((a, b) => {
      if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime()
      return Math.abs(b.amount) - Math.abs(a.amount)
    })
    return data
  }, [search, category, sortBy])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
            className="pl-9 bg-card border-border text-foreground"
          />
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Select value={category} onValueChange={(v) => { setCategory(v); setPage(1) }}>
            <SelectTrigger className="w-full sm:w-40 bg-card border-border text-foreground">
              <Filter className="size-4 text-muted-foreground mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(v) => setSortBy(v as "date" | "amount")}>
            <SelectTrigger className="w-full sm:w-40 bg-card border-border text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="amount">Sort by Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-secondary/50">
              <tr>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Merchant</th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Date</th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payment</th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right">Amount</th>
                <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {paged.map((tx) => {
                const Icon = iconMap[tx.category] || ShoppingCart
                return (
                  <tr key={tx.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-full", tx.amount > 0 ? "bg-success/10" : "bg-secondary")}>
                          <Icon className={cn("size-4", tx.amount > 0 ? "text-success" : "text-muted-foreground")} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{tx.merchant}</p>
                          <p className="text-xs text-muted-foreground">{tx.detail}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {tx.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{formatDate(tx.date)}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{tx.method}</td>
                    <td className={cn("py-4 px-6 text-sm font-bold text-right", tx.amount > 0 ? "text-success" : "text-foreground")}>
                      {tx.amount > 0 ? "+" : "-"}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8 text-muted-foreground">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem><Eye className="size-4 mr-2" />View</DropdownMenuItem>
                          <DropdownMenuItem><Pencil className="size-4 mr-2" />Edit</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive"><Trash2 className="size-4 mr-2" />Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing {(page - 1) * PAGE_SIZE + 1}-{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft className="size-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                size="icon"
                className="size-8"
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
