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
      <div className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm max-w-md w-full md:w-auto transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full text-blue-600 dark:text-blue-400 shrink-0">
          <Sparkles className="size-5" />
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
          <span className="font-bold text-blue-700 dark:text-blue-400 block mb-0.5">AI Insight</span>
          "You spent ₹1,200 less on food delivery this week."
        </p>
      </div>
    </div>
  )
}
