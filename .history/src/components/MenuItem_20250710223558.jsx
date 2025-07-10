import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="text ">
    <Icon/>
    <p >{title}</p>
    </Link>
  )
}
