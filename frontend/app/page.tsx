import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { SocialProof } from "@/components/landing/social-proof"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { AnalyticsShowcase } from "@/components/landing/analytics-showcase"
import { AIInsightsSection } from "@/components/landing/ai-insights-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { UploadPreview } from "@/components/landing/upload-preview"
import { PricingTable } from "@/components/landing/pricing-table"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesGrid />
        <AnalyticsShowcase />
        <AIInsightsSection />
        <HowItWorks />
        <UploadPreview />
        <PricingTable />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
