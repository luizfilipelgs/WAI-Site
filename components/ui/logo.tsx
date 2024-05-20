import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="WAI">
      <Image src="/images/logo.svg" alt="WAI logo" width={35} height={35} />
    </Link>
  )
}
