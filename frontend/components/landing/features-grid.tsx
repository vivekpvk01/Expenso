import {
  Receipt,
  Upload,
  Sparkles,
  Wallet,
  PieChart,
  Tags,
} from "lucide-react"

const features = [
  {
    icon: Receipt,
    title: "Smart Expense Tracking",
    description:
      "Automatically track and categorize every transaction with intelligent pattern recognition across all your accounts.",
  },
  {
    icon: Upload,
    title: "Receipt & Document Upload",
    description:
      "Upload receipts, invoices, and financial documents. Our OCR engine extracts amounts, dates, and categories instantly.",
  },
  {
    icon: Sparkles,
    title: "AI Financial Insights",
    description:
      "Receive personalized recommendations powered by machine learning that analyze your spending patterns over time.",
  },
  {
    icon: Wallet,
    title: "Budget Planning",
    description:
      "Set category-level budgets, track progress in real time, and get alerts before you overspend each month.",
  },
  {
    icon: PieChart,
    title: "Real-time Analytics Dashboard",
    description:
      "Visualize income, expenses, and savings with interactive charts that update as your financial data changes.",
  },
  {
    icon: Tags,
    title: "Automatic Categorization",
    description:
      "Expenses are automatically sorted into categories using AI, so your data is always organized without manual work.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3">Features</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything you need to manage your finances
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From automated tracking to AI-powered insights, Expenso provides
            a complete toolkit for understanding your money.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                <feature.icon className="size-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
