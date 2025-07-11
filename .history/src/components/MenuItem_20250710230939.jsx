import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address}>
    <Icon className="text-2xl border-4" />
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
