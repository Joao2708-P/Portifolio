import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Guilherme-Portifolio',
  description: 'Potifolólio profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
       <head><link rel="icon" href="/JG-icon.ico" sizes="32x32" /></head>
       <body className={inter.className}>{children}</body>
    </html>
  )
}
