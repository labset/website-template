import { SiteLayout } from '@/components/site-layout'
import { HeroSection } from '@/components/hero-section'
import { LatestPostsSection } from '@/components/latest-posts-section'

export function LandingPage() {
  return (
    <SiteLayout>
      <HeroSection />
      <LatestPostsSection />
    </SiteLayout>
  )
}
