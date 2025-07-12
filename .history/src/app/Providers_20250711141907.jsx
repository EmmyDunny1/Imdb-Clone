'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system'  attribute='class'>
<div className='dark:bg-gray-900 bg-gray-100 min-h-screen text-gray-700 dark: light:text-gray-900'>
  {children}
</div>

    </ThemeProvider>
  )
}
