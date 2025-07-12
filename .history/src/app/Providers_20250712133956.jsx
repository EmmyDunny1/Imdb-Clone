'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}) {
  return (
    <ThemeProvider attribute='class'>
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      {children}
      </div>
    </ThemeProvider>
    
  )
}
