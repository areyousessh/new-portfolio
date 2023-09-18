'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/navbar'
import ThemeSwitcher from '@/components/themeSwitcher/themeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-white dark:bg-[#1E1E1E]'>
        <div className='flex flex-row'>
        <NavBar />
        <ThemeSwitcher/>
        </div>
          {children}
      </body>
    </html>
  )
}
