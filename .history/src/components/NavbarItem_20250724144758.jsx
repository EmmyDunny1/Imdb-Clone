import Link from 'next/link'
import React from 'react'
import {use}

export default function NavbarItem({title, param}) {
  return (
    <div>
      <Link href={`?/genre=${param}`}>{title}</Link >
    </div>
  )
}
