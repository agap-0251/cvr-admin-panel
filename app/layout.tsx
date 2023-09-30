import './globals.css'
import { Inter } from 'next/font/google'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CVR COLLEGE ADMIN PANEL',
  description: 'This is a admin panel for managing the mentors and student details of cvr college of engineering.',
}

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className=" bg-black min-h-screen text-white overflow-hidden">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </body>
    </html>
  )
}
