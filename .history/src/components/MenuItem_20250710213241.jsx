import React from 'react'

export default function MenuItem(title, address, Icon) {
  return (
    <Link href={address} className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-lg">
    <Icon/>
    <p>{}</p>
    </Link>
  )
}
