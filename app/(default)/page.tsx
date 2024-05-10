import Hero from '@/components/hero'
import Features from '@/components/features'

import Zigzag from '@/components/zigzag'
import FeaturesBlocks from '@/components/features-blocks'
import { Oracle } from '@/components/oracle'

export const metadata = {
  title: '[W].AI',
  description: 'Page description',
}

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Oracle />
      <Zigzag />
    </>
  )
}
