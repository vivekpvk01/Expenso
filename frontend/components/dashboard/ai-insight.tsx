"use client"

import { Sparkles } from "lucide-react"

export function AiInsight() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground text-balance">
          Good evening, Aarav.
        </h2>
        <p className="text-muted-foreground mt-1">
          Here is your financial health update for today.
        </p>
      </div>
      <div className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg border border-primary/20 max-w-md w-full md:w-auto">
        <div className="bg-primary/20 p-1.5 rounded-full text-primary shrink-0">
          <Sparkles className="size-5" />
        </div>
        <p className="text-sm text-secondary-foreground font-medium">
          AI Tip: You spent 15% less on Swiggy orders this week compared to last.
          Keep it up!
        </p>
      </div>
    </div>
  )
}
