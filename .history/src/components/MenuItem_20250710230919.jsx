import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address}>
    <Icon className="cl" />
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
