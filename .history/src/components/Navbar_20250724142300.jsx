import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='`flex items-center justify-center gap-6 whitespace-nowrap bg-gray-100 dark:bg-amber-700 p-4 overflow-x-scroll md:overflow-x-hidden'>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
