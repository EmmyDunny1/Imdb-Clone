import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center gap-6 whitespace-nowrap bg-gray-900 text-white dark:bg-gray-700 p-4 lg:text-lg font-medium '>
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
