import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Markets Simplified - Transform Financial Events Into Clear Insights',
  description: 'Stop guessing what market events mean. Get instant analysis with historical patterns and plain-English explanations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
