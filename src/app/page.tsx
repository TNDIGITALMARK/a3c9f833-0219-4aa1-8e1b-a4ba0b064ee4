export const dynamic = 'force-dynamic'

import { Navigation } from '@/components/dashboard/Navigation'
import { HeroSection } from '@/components/dashboard/HeroSection'
import { AnalyticsDashboard } from '@/components/dashboard/AnalyticsDashboard'
import { FeatureHighlights } from '@/components/dashboard/FeatureHighlights'
import { CTASection } from '@/components/dashboard/CTASection'
import { Footer } from '@/components/dashboard/Footer'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AnalyticsDashboard />
        <FeatureHighlights />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
