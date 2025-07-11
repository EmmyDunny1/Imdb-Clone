'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
export default function Provider() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
    
    </ThemeProvider>
  )
}
