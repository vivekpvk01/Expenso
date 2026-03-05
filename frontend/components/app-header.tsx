"use client"

import { Bell, Menu, Moon, Search, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

interface AppHeaderProps {
  title: string
  onMenuToggle?: () => void
}

export function AppHeader({ title, onMenuToggle }: AppHeaderProps) {
  const { setTheme, theme } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card shrink-0 z-10">
      <div className="flex items-center gap-4 lg:hidden">
        <button
          onClick={onMenuToggle}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Menu className="size-5" />
        </button>
        <h2 className="text-foreground text-lg font-bold">Expenso</h2>
      </div>

      <div className="hidden lg:flex items-center text-foreground text-lg font-bold">
        {title}
      </div>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-9 w-64 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Mobile search toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-muted-foreground"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? <X className="size-5" /> : <Search className="size-5" />}
        </Button>

        {/* Theme toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
        >
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 bg-destructive rounded-full" />
          <span className="sr-only">Notifications</span>
        </Button>

        {/* User avatar dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-primary/20 text-primary flex items-center justify-center rounded-full size-9 font-semibold text-sm hover:ring-2 hover:ring-primary/30 transition-all">
              AM
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
