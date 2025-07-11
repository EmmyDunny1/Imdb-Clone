'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function Provider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <div className='dark:bg-gray-900 bg-gray-100 min-h-screen'>
        {/* Your application components go here */}
      </div>
    </ThemeProvider>
  )
}
