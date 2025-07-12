'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

import React from 'react'

export default function DarkModeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);}, []);

  return (
    <div>
          {mounted && { currentTheme === 'dark' ? (<MdLightMode onClick={() => setTheme('light')} className='hover:text-amber-500 text-xl cursor-pointer'/>) : 
          
          (<MdDarkMode onClick={() => setTheme('dark')} className='hover:text-amber-500 text-xl cursor-pointer'/>) }}
    </div>
  )
}
