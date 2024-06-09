import { Hero } from '@/components/hero'
import Mission from '@/components/mission'

import { Oracle } from '@/components/oracle'
import { Aplicativo } from '@/components/aplicativo'
import { Bootle } from '@/components/bootle'
import Waters from '@/components/waters'
import YouAreW from '@/components/youAreW'

export const metadata = {
  title: '[W].AI',
  description: 'Água alimetica. Saúde e beleza para seu corpo, mente e alma.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Oracle />
      <Waters />
      <Bootle />
      <Aplicativo />
      <YouAreW />
    </>
  )
}
