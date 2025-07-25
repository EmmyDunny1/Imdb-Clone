import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="">
    <Icon/>
    <p className='uppercase tex hidden sm:inline '>{title}</p>
    </Link>
  )
}
