import React from 'react'
import Link from 'next/link'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="">
    <>{I}</>
    <p>{title}</p>
    </Link>
  )
}
