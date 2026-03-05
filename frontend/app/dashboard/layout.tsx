"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { AppHeader } from "@/components/app-header"
import { usePathname } from "next/navigation"

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard Overview",
  "/dashboard/transactions": "Transactions",
  "/dashboard/analytics": "Analytics",
  "/dashboard/budgets": "Budgets",
  "/dashboard/upload": "Upload Bills",
  "/dashboard/insights": "AI Insights",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const title = pageTitles[pathname] || "Dashboard"

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <AppHeader
          title={title}
          onMenuToggle={() => setMobileOpen(!mobileOpen)}
        />
        <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar p-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
