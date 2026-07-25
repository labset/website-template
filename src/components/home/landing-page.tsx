import { SiteLayout } from '@/components/layout/site-layout'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'
import { LatestPostsSection } from '@/components/home/latest-posts-section'

export function LandingPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <FeaturesSection />
      <LatestPostsSection />
    </SiteLayout>
  )
}
