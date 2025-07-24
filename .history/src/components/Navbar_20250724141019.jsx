import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='' param='fetchTrending'/>
    </div>
  )
}
