import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src="/images/logo.png" alt="Cruip logo" width={35} height={35} />
    </Link>
  )
}
