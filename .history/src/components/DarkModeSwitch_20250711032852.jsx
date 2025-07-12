'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'

import React from 'react'

export default function DarkModeSwitch() {
  const {theme, setTheme, sys} = useTheme()
  return (
    <div>
 DarkModeSwitch 
    </div>
  )
}
