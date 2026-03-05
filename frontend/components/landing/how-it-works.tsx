import { Upload, Cpu, Lightbulb } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Documents",
    description:
      "Upload receipts, invoices, or financial documents in any format. Drag and drop or browse from your device.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Analyzes Spending",
    description:
      "Expenso processes your documents using OCR and machine learning to extract, categorize, and analyze all financial data.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Get Actionable Insights",
    description:
      "Receive personalized recommendations, budget alerts, and savings opportunities based on your unique spending patterns.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold text-primary mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Get started in three simple steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From document upload to actionable insights in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center">
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[calc(50%+40px)] hidden h-px w-[calc(100%-80px)] border-t-2 border-dashed border-border md:block" />
              )}

              <div className="relative mb-6">
                <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <s.icon className="size-6 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold size-6">
                  {s.step}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
