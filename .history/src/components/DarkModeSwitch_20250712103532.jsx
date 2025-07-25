'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

import React from 'react'

export default function DarkModeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const

  return (
    <div>
      { currentTheme === 'dark' ? <MdLightMode onClick={() => setTheme('light')} className='hover:text-amber-500 text-xl cursor-pointer'/> : <MdDarkMode onClick={() => setTheme('dark')} className='hover:text-amber-500 text-xl cursor-pointer'/> }
    </div>
  )
}
