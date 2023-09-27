import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'


export const metadata = {
  title: 'CVR COLLEGE ADMIN PANEL',
  description: 'This is a admin panel for managing the mentors and student details of cvr college of engineering.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` bg-black min-h-screen text-white overflow-hidden`}>
          <main className='min-h-screen flex'>
            <SideBar />
            <section className='w-full'>
              <Navbar />
              {children}
            </section>
          </main>
        </body>
    </html>
  )
}
