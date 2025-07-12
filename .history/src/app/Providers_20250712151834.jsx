'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { Header } from './Header'

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute='class'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-pointer select-none`}>
        <Header />
        {children}
      </body>
    </ThemeProvider>
  )
}
