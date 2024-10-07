import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Marketer',
  description: '',
  authors: [{ name: 'Luca Merighi' }]
}

interface RootLayoutProps {
    children: Readonly<ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-BR" className="antialiased">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}