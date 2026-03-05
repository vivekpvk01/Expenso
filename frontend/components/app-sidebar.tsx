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
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

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

export function AppSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="bg-primary flex items-center justify-center rounded-lg size-10 text-primary-foreground shrink-0">
          <Wallet className="size-5" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <h1 className="text-foreground text-lg font-bold leading-tight">
              Expenso
            </h1>
            <p className="text-muted-foreground text-xs font-medium">
              Finance AI
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 flex flex-col gap-1 mt-2">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="size-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="px-3 py-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="size-5" />
          ) : (
            <ChevronLeft className="size-5" />
          )}
        </button>
      </div>

      {/* User section */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="relative shrink-0">
            <div className="bg-primary/20 text-primary flex items-center justify-center rounded-full size-10 font-semibold text-sm">
              AS
            </div>
            <div className="absolute bottom-0 right-0 size-3 bg-success rounded-full border-2 border-card" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <p className="text-foreground text-sm font-medium">Aarav Sharma</p>
              <p className="text-muted-foreground text-xs">Free Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
