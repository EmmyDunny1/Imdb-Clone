import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500 text'>
    <Icon className="text-2xl" />
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
