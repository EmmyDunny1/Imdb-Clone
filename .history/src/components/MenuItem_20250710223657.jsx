import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className=" ">
    <Icon/>
    <p className='text-shadow-emerald-500'>{title}</p>
    </Link>
  )
}
