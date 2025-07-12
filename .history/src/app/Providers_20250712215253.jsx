"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Header } from "@components/Header";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-pointer select-none`}
      >
        
        {children}
      </body>
    </ThemeProvider>
  );
}
