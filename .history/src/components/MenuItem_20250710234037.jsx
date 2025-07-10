import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500 text-2xl'>
    <Icon className="text-2xl" />
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    <p className='text-9xl hidden md:'>jjjj</p>
    </Link>
  )
}
