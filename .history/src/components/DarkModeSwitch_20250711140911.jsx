'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

import React from 'react'

export default function DarkModeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      { currentTheme === 'dark' ? <MdLightMode/> : <MdDarkMode /> }
 DarkModeSwitch 
    </div>
  )
}
