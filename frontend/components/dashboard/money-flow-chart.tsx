"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

const data = [
  { month: "Jan", income: 75000, expenses: 32500 },
  { month: "Feb", income: 80000, expenses: 35000 },
  { month: "Mar", income: 75000, expenses: 31000 },
  { month: "Apr", income: 85000, expenses: 38000 },
  { month: "May", income: 90000, expenses: 33000 },
  { month: "Jun", income: 75000, expenses: 36500 },
]

export function MoneyFlowChart() {
  return (
    <div className="lg:col-span-2 bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-foreground">
            Money In vs Money Out
          </h3>
          <p className="text-sm text-muted-foreground">
            Net positive cash flow this month
          </p>
        </div>
        <select className="bg-secondary border-none text-xs font-medium rounded-lg text-secondary-foreground py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary">
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6} barSize={20}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.9} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0.9} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--muted-foreground)" stopOpacity={0.5} />
                <stop offset="95%" stopColor="var(--muted-foreground)" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />
            <Tooltip
              cursor={false}
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "none",
                borderRadius: "10px",
                color: "#ffffff",
                fontSize: 12,
              }}
              formatter={(value: number, name: string) => [`₹${value.toLocaleString('en-IN')}`, name]}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, paddingBottom: 12 }}
            />
            <Bar
              dataKey="income"
              name="Income"
              fill="url(#colorIncome)"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
            />
            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="url(#colorExpenses)"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
