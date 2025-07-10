import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="text-cyan-400 ">
    <Icon/>
    <p className='uppercase hidden sm:inline text-5xl text-white'>{title}</p>
    </Link>
  )
}
