import { Hero } from '@/components/hero'
import Features from '@/components/features'

import Zigzag from '@/components/zigzag'
import { Oracle } from '@/components/oracle'
import { Aplicativo } from '@/components/aplicativo'
import { Bootle } from '@/components/bootle'

export const metadata = {
  title: '[W].AI',
  description: 'Page description',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Oracle />
      <Bootle />
      <Aplicativo />
      <Zigzag />
    </>
  )
}
