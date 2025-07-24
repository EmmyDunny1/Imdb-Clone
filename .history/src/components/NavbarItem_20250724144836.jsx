import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
  const searchParams =
  return (
    <div>
      <Link href={`?/genre=${param}`}>{title}</Link >
    </div>
  )
}
