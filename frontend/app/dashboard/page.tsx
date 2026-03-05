import { AiInsight } from "@/components/dashboard/ai-insight"
import { StatCards } from "@/components/dashboard/stat-cards"
import { MoneyFlowChart } from "@/components/dashboard/money-flow-chart"
import { SavingsRate, TopExpenses } from "@/components/dashboard/savings-and-expenses"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { BudgetHealth } from "@/components/dashboard/budget-health"

export default function DashboardPage() {
  return (
    <>
      <AiInsight />
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MoneyFlowChart />
        <div className="flex flex-col gap-6">
          <SavingsRate />
          <TopExpenses />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RecentTransactions />
        <BudgetHealth />
      </div>
    </>
  )
}
