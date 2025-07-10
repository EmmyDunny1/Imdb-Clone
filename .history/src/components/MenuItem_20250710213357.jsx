import React from 'react'

export default function MenuItem(title, address, Icon) {
  return (
    <Link href={address} className="">
    <Icon/>
    <p>{title}</p>
    </Link>
  )
}
