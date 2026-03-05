"use client"

import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  PieChart,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

function DashboardPreview() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-card p-5 shadow-2xl">
        {/* Mini stat cards row */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl border border-border bg-background p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="rounded-lg bg-success/10 p-1.5">
                <DollarSign className="size-3.5 text-success" />
              </div>
              <span className="flex items-center gap-0.5 text-[10px] font-medium text-success">
                <ArrowUpRight className="size-2.5" />
                {"5.2%"}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Income</p>
            <p className="text-sm font-bold text-foreground">₹3,75,000</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="rounded-lg bg-destructive/10 p-1.5">
                <TrendingUp className="size-3.5 text-destructive" />
              </div>
              <span className="flex items-center gap-0.5 text-[10px] font-medium text-destructive">
                <ArrowDownRight className="size-2.5" />
                {"1.2%"}
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Expenses</p>
            <p className="text-sm font-bold text-foreground">₹2,15,000</p>
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="rounded-xl border border-border bg-background p-3 mb-4">
          <p className="text-[10px] font-medium text-muted-foreground mb-3">Monthly Overview</p>
          <div className="flex items-end gap-1.5 h-20">
            {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85, 45, 95].map(
              (h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-primary/80 transition-all"
                    style={{ height: `${h}%` }}
                  />
                  <div
                    className="w-full rounded-t bg-primary/25"
                    style={{ height: `${h * 0.5}%` }}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* AI insight card */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 flex items-start gap-2.5">
          <div className="rounded-lg bg-primary/10 p-1.5 shrink-0 mt-0.5">
            <Sparkles className="size-3.5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-foreground">AI Insight</p>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              You could save ₹2,500/month by reducing subscription services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left copy */}
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="size-3 text-primary" />
              <span>AI-Powered Financial Intelligence</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Understand Your Money With{" "}
              <span className="text-primary">Intelligent</span>{" "}
              Expense Analytics
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Expenso automatically analyzes your spending, extracts data from
              receipts and financial documents, and delivers AI-driven insights
              to help you make smarter financial decisions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">View Demo</Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <div className="size-1.5 rounded-full bg-success" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <div className="size-1.5 rounded-full bg-success" />
                Free forever plan
              </span>
            </div>
          </div>

          {/* Right dashboard mockup */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
