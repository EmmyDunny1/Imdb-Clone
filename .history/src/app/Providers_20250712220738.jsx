"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <body
      >
        <
        {children}
      </body>
    </ThemeProvider>
  );
}
