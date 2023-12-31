"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SideBar = () => {
  const navigate = useRouter()

  async function handleLogout() {
    localStorage.clear()
    navigate.push("/")

  }

  return (
    <div className='bg-blue-400 w-[15rem] flex flex-col text-center'>
        <h2 className='text-[2.5rem] my-[1rem]'>Project</h2>
        <div className='flex flex-col mt-[2rem]'>
            <Link className='my-[0.5rem] hover:bg-blue-300 w-full py-2 text-xl' href={'/students'}>Students</Link>
            <Link className='my-[0.5rem] hover:bg-blue-300 w-full py-2 text-xl' href={'/mentors'}>Mentors</Link>
            <button onClick={handleLogout} className='my-[0.5rem] hover:bg-blue-300 w-full py-2 text-xl'>Logout</button>
        </div>
    </div>
  )
}

export default SideBar