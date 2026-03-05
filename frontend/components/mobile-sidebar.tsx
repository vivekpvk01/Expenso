"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Wallet,
  Upload,
  Sparkles,
  FileBarChart,
  Settings,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Transactions", href: "/dashboard/transactions", icon: Receipt },
  { label: "Analytics", href: "/dashboard/analytics", icon: PieChart },
  { label: "Budgets", href: "/dashboard/budgets", icon: Wallet },
  { label: "Upload Bills", href: "/dashboard/upload", icon: Upload },
  { label: "AI Insights", href: "/dashboard/insights", icon: Sparkles },
  { label: "Reports", href: "/dashboard/reports", icon: FileBarChart },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname()

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      <aside className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border z-50 lg:hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary flex items-center justify-center rounded-lg size-10 text-primary-foreground">
              <Wallet className="size-5" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-foreground text-lg font-bold leading-tight">
                Expenso
              </h1>
              <p className="text-muted-foreground text-xs font-medium">
                Finance AI
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-800"
                )}
              >
                <item.icon className="size-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="relative">
              <div className="bg-primary/20 text-primary flex items-center justify-center rounded-full size-10 font-semibold text-sm">
                AS
              </div>
              <div className="absolute bottom-0 right-0 size-3 bg-success rounded-full border-2 border-card" />
            </div>
            <div className="flex flex-col">
              <p className="text-foreground text-sm font-medium">Aarav Sharma</p>
              <p className="text-muted-foreground text-xs">Free Plan</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
