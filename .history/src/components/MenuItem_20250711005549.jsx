import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500 text-2xl'>
    <Icon className="text-2xl sm:hidden" />
    <p className='uppercase  sm:inline text-sm'>{title}</p>
    
    </Link>
  )
}
