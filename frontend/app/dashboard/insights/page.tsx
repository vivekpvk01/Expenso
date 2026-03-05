"use client"

import {
  Sparkles,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const insights = [
  {
    type: "positive" as const,
    icon: TrendingDown,
    title: "Food Delivery Decreased",
    description:
      "You spent 22% less on Swiggy orders this week compared to last. Your weekly average dropped from ₹1,850 to ₹1,430.",
    action: "View dining transactions",
  },
  {
    type: "warning" as const,
    icon: AlertTriangle,
    title: "Shopping Budget at Risk",
    description:
      "Your shopping budget is 105% utilized with 10 days remaining. Consider pausing non-essential purchases.",
    action: "Review shopping budget",
  },
  {
    type: "positive" as const,
    icon: TrendingUp,
    title: "Savings Goal On Track",
    description:
      "You are on track to meet your monthly savings goal of ₹20,000. Current savings rate is 28%, just 2% below target.",
    action: "View savings details",
  },
  {
    type: "insight" as const,
    icon: Lightbulb,
    title: "Subscription Optimization",
    description:
      "You have 6 active subscriptions totaling ₹6,500/month. Canceling unused ones could save up to ₹2,500/month.",
    action: "Review subscriptions",
  },
  {
    type: "insight" as const,
    icon: Target,
    title: "Transport Spending Pattern",
    description:
      "Your UPI spending increased by 12% this month. Most rides are via Ola on weekday evenings. Consider metro services.",
    action: "Analyze transport",
  },
]

const recommendations = [
  {
    title: "Set up automatic savings",
    description:
      "Automate a ₹15,000 transfer to savings on payday to ensure consistent savings growth.",
    priority: "High",
  },
  {
    title: "Negotiate utility bills",
    description:
      "Your electricity costs are 15% above average for your area. Consider switching to renewable energy plans.",
    priority: "Medium",
  },
  {
    title: "Use cashback rewards",
    description:
      "Based on your spending patterns, a cashback card could save you ₹3,500/month.",
    priority: "Low",
  },
]

const typeStyles = {
  positive: {
    bg: "bg-success/10",
    border: "border-success/20",
    iconColor: "text-success",
    badge: "bg-success/10 text-success",
    badgeLabel: "Positive",
  },
  warning: {
    bg: "bg-warning/10",
    border: "border-warning/20",
    iconColor: "text-warning",
    badge: "bg-warning/10 text-warning",
    badgeLabel: "Alert",
  },
  insight: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    iconColor: "text-primary",
    badge: "bg-primary/10 text-primary",
    badgeLabel: "Insight",
  },
}

export default function InsightsPage() {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-foreground">AI Insights</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Personalized financial intelligence powered by AI analysis
        </p>
      </div>

      {/* AI Summary Banner */}
      <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-xl shrink-0">
            <Sparkles className="size-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              Weekly Financial Summary
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This week you spent ₹4,875, which is 8% less than your weekly
              average. Your top spending category was Food & Dining at ₹1,425.
              You are projected to save ₹18,500 this month if current trends
              continue. Your financial health score is 78/100 (Good).
            </p>
          </div>
        </div>
      </div>

      {/* Insights grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {insights.map((insight, i) => {
          const style = typeStyles[insight.type]
          return (
            <div
              key={i}
              className={cn(
                "bg-card p-5 rounded-xl border shadow-sm flex flex-col gap-3",
                style.border
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", style.bg)}>
                    <insight.icon className={cn("size-5", style.iconColor)} />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    {insight.title}
                  </h4>
                </div>
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full",
                    style.badge
                  )}
                >
                  {style.badgeLabel}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.description}
              </p>
              <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors self-start">
                {insight.action}
                <ArrowRight className="size-4" />
              </button>
            </div>
          )
        })}
      </div>

      {/* Recommendations */}
      <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
        <h3 className="text-lg font-bold text-foreground mb-4">
          Recommendations
        </h3>
        <div className="flex flex-col gap-4">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50"
            >
              <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                <Lightbulb className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-foreground">
                    {rec.title}
                  </h4>
                  <span
                    className={cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase",
                      rec.priority === "High"
                        ? "bg-destructive/10 text-destructive"
                        : rec.priority === "Medium"
                          ? "bg-warning/10 text-warning"
                          : "bg-success/10 text-success"
                    )}
                  >
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {rec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
