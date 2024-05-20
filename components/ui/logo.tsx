import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="WAI">
      <Image src={logoImg} alt="WAI logo" width={35} height={35} />
    </Link>
  )
}
