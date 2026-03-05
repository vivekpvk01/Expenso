"use client"

import { useState } from "react"
import {
  UtensilsCrossed,
  ShoppingBag,
  Car,
  Home,
  Zap,
  Film,
  Shirt,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const iconMap: Record<string, typeof Home> = {
  Housing: Home,
  Dining: UtensilsCrossed,
  Shopping: ShoppingBag,
  Transport: Car,
  Utilities: Zap,
  Entertainment: Film,
  Clothing: Shirt,
}

interface Budget {
  id: number
  category: string
  spent: number
  limit: number
}

const initialBudgets: Budget[] = [
  { id: 1, category: "Housing", spent: 1200, limit: 1300 },
  { id: 2, category: "Dining", spent: 350, limit: 450 },
  { id: 3, category: "Shopping", spent: 210, limit: 200 },
  { id: 4, category: "Transport", spent: 85, limit: 150 },
  { id: 5, category: "Utilities", spent: 85, limit: 120 },
  { id: 6, category: "Entertainment", spent: 180, limit: 250 },
]

export default function BudgetsPage() {
  const [budgets, setBudgets] = useState(initialBudgets)
  const [newCategory, setNewCategory] = useState("")
  const [newLimit, setNewLimit] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)
  const totalLimit = budgets.reduce((sum, b) => sum + b.limit, 0)
  const overallPercent = Math.round((totalSpent / totalLimit) * 100)

  function addBudget() {
    if (!newCategory || !newLimit) return
    setBudgets([
      ...budgets,
      {
        id: Date.now(),
        category: newCategory,
        spent: 0,
        limit: parseFloat(newLimit),
      },
    ])
    setNewCategory("")
    setNewLimit("")
    setDialogOpen(false)
  }

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">
            Budget Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Track and manage your monthly budgets
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="size-4" />
              New Budget
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Create New Budget</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 pt-4">
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Category</Label>
                <Select value={newCategory} onValueChange={setNewCategory}>
                  <SelectTrigger className="bg-secondary border-border text-foreground">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(iconMap).map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Monthly Limit ($)</Label>
                <Input
                  type="number"
                  placeholder="500"
                  value={newLimit}
                  onChange={(e) => setNewLimit(e.target.value)}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <Button onClick={addBudget} className="bg-primary text-primary-foreground hover:bg-primary/90">
                Create Budget
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Card */}
      <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Monthly Overview
            </h3>
            <p className="text-sm text-muted-foreground">
              ${totalSpent.toLocaleString()} of ${totalLimit.toLocaleString()} budget used
            </p>
          </div>
          <span
            className={cn(
              "text-sm font-bold px-3 py-1 rounded-full",
              overallPercent >= 100
                ? "text-destructive bg-destructive/10"
                : overallPercent >= 75
                  ? "text-warning bg-warning/10"
                  : "text-success bg-success/10"
            )}
          >
            {overallPercent}% Used
          </span>
        </div>
        <div className="w-full bg-secondary rounded-full h-3">
          <div
            className={cn(
              "h-3 rounded-full transition-all duration-500",
              overallPercent >= 100
                ? "bg-destructive"
                : overallPercent >= 75
                  ? "bg-warning"
                  : "bg-success"
            )}
            style={{ width: `${Math.min(overallPercent, 100)}%` }}
          />
        </div>
      </div>

      {/* Budget cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgets.map((budget) => {
          const percentage = Math.min(
            Math.round((budget.spent / budget.limit) * 100),
            100
          )
          const isOver = budget.spent > budget.limit
          const isNear = percentage >= 75 && !isOver
          const Icon = iconMap[budget.category] || ShoppingBag
          const barColor = isOver
            ? "bg-destructive"
            : isNear
              ? "bg-warning"
              : "bg-success"
          const statusColor = isOver
            ? "text-destructive"
            : isNear
              ? "text-warning"
              : "text-success"

          return (
            <div
              key={budget.id}
              className="bg-card p-5 rounded-xl border border-border shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      isOver ? "bg-destructive/10" : "bg-primary/10"
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-5",
                        isOver ? "text-destructive" : "text-primary"
                      )}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {budget.category}
                    </p>
                    <p className={cn("text-xs font-medium", statusColor)}>
                      {isOver ? "Over Budget" : `${percentage}% Used`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Spent</span>
                <span className="font-bold text-foreground">
                  ${budget.spent.toLocaleString()} / ${budget.limit.toLocaleString()}
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
              <p className="text-xs text-muted-foreground mt-2">
                ${Math.max(budget.limit - budget.spent, 0).toLocaleString()}{" "}
                remaining
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
