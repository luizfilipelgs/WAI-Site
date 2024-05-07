import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export const metadata = {
  title: '[W].AI',
  description: 'Page description',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
