import Link from 'next/link'
import React from 'react'

export default function NavbarItem(title, param) {
  return (
    <div>
      <Link href={'/genre=${para}'}>{title}</Link href={'/genre=${para}'}>
    </div>
  )
}
