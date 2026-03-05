"use client"

import { useState } from "react"
import {
  User,
  Lock,
  Bell,
  Palette,
  Link2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [name, setName] = useState("Aarav Sharma")
  const [email, setEmail] = useState("aarav.sharma@example.com")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [budgetAlerts, setBudgetAlerts] = useState(true)
  const [weeklyReport, setWeeklyReport] = useState(true)

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-foreground">Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-secondary mb-6 w-full justify-start h-auto flex-wrap gap-1 p-1">
          <TabsTrigger value="profile" className="gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground">
            <User className="size-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground">
            <Lock className="size-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground">
            <Bell className="size-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="connected" className="gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground">
            <Link2 className="size-4" />
            Connected
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2 data-[state=active]:bg-card data-[state=active]:text-foreground">
            <Palette className="size-4" />
            Appearance
          </TabsTrigger>
        </TabsList>

        {/* Profile */}
        <TabsContent value="profile">
          <div className="bg-card rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Profile Information
            </h3>
            <div className="flex flex-col gap-5 max-w-lg">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/20 text-primary flex items-center justify-center rounded-full size-16 font-bold text-xl">
                  AS
                </div>
                <div>
                  <Button variant="outline" size="sm" className="text-foreground">
                    Change Avatar
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG. Max 2MB.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Full Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Currency</Label>
                <Input
                  value="INR (₹)"
                  disabled
                  className="bg-secondary border-border text-muted-foreground"
                />
              </div>
              <Button className="self-start bg-primary text-primary-foreground hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <div className="bg-card rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Change Password
            </h3>
            <div className="flex flex-col gap-5 max-w-lg">
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Current Password</Label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">New Password</Label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground">Confirm New Password</Label>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button className="self-start bg-primary text-primary-foreground hover:bg-primary/90">
                Update Password
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <div className="bg-card rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Notification Preferences
            </h3>
            <div className="flex flex-col gap-6 max-w-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Email Notifications
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Push Notifications
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Browser push notifications
                  </p>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Budget Alerts
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Get notified when approaching budget limits
                  </p>
                </div>
                <Switch
                  checked={budgetAlerts}
                  onCheckedChange={setBudgetAlerts}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Weekly Summary
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Receive a weekly financial summary
                  </p>
                </div>
                <Switch
                  checked={weeklyReport}
                  onCheckedChange={setWeeklyReport}
                />
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Connected Accounts */}
        <TabsContent value="connected">
          <div className="bg-card rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Connected Accounts
            </h3>
            <div className="flex flex-col gap-4 max-w-lg">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <svg className="size-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">Google</p>
                    <p className="text-xs text-muted-foreground">Connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-destructive border-destructive/30 hover:bg-destructive/10">
                  Disconnect
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                <div className="flex items-center gap-3">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-foreground">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Appearance */}
        <TabsContent value="appearance">
          <div className="bg-card rounded-xl border border-border shadow-sm p-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Theme Preferences
            </h3>
            <div className="flex flex-col gap-6 max-w-lg">
              <p className="text-sm text-muted-foreground">
                Choose your preferred appearance. Use the theme toggle in the
                top navigation to switch between light and dark mode.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {["Light", "Dark", "System"].map((theme) => (
                  <button
                    key={theme}
                    className={cn(
                      "p-4 rounded-lg border-2 text-center transition-colors",
                      theme === "Dark"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div
                      className={cn(
                        "size-8 rounded-lg mx-auto mb-2",
                        theme === "Light"
                          ? "bg-[#F6F6F8] border border-border"
                          : theme === "Dark"
                            ? "bg-[#0F172A]"
                            : "bg-gradient-to-br from-[#F6F6F8] to-[#0F172A]"
                      )}
                    />
                    <p className="text-sm font-medium text-foreground">
                      {theme}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
