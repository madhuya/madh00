import "@styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@lib/utils"
import { ThemeProvider } from "@components/theme-provider"
import Navbar from "@components/Navbar"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Madhu Yadav",
  description: "Analyst, Explorer and Strategist",
  
    icons: "/favicon.ico",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" suppressHydrationWarning={true}>
      <Analytics/>
      <head>
      <link rel="icon" href="http://localhost:3000/favicon.ico" sizes="any" />
      </head>
      
      <body
        className={cn(
          "min-h-full bg-background font-sans antialiased overflow-y-scroll no-scrollbar",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}