import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from '@/components/SideBar'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CVR COLLEGE ADMIN PANEL',
  description: 'This is a admin panel for managing the mentors and student details of cvr college of engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen text-white overflow-y-hidden`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </body>
    </html>
  )
}
