import {
  Sparkles,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"

const insights = [
  {
    icon: TrendingDown,
    iconColor: "text-success",
    iconBg: "bg-success/10",
    title: "Spending Decrease",
    description: "You spent 22% less on Swiggy orders this week compared to last.",
  },
  {
    icon: TrendingUp,
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
    title: "Transport Increase",
    description:
      "Your UPI spending increased by ₹1,200 compared to last week. Consider alternatives.",
  },
  {
    icon: AlertTriangle,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "Savings Opportunity",
    description:
      "You could save ₹2,000 monthly by reducing food delivery expenses. 3 overlapping subscriptions detected.",
  },
]

export function AIInsightsSection() {
  return (
    <section id="ai-insights" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left copy */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary mb-3">
              AI Insights
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Your personal AI financial advisor
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Expenso uses machine learning to analyze your spending patterns,
              detect anomalies, and provide actionable recommendations tailored
              to your financial goals.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Pattern recognition across categories",
                "Anomaly detection for unusual charges",
                "Personalized savings recommendations",
                "Predictive budget forecasting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <div className="size-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right insight cards */}
          <div className="flex-1 w-full flex flex-col gap-4 max-w-md">
            {insights.map((insight) => (
              <div
                key={insight.title}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div
                  className={`shrink-0 rounded-lg p-2.5 ${insight.iconBg}`}
                >
                  <insight.icon
                    className={`size-5 ${insight.iconColor}`}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {insight.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}

            {/* AI badge */}
            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-muted-foreground">
              <Sparkles className="size-3 text-primary" />
              <span>Insights update automatically as new data arrives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
