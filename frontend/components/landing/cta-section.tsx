import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 px-8 py-16 text-center sm:px-16">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Start understanding your finances today
          </h2>
          <p className="mt-4 mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
            Join thousands of professionals who use Expenso to track expenses,
            gain AI insights, and make smarter financial decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/signup">
                Create Account
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
