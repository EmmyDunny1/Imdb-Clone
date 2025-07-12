'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

import React from 'react'

export default function DarkModeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      { currentTheme === 'dark' ? <MdLightMode className='hover:text-amber-500 text-xl cursor-pointer'/> : <MdDarkMode className='hover:text-amber-500 text-xl cursor-pointer'/> }
    </div>
  )
}
