import Image from 'next/image'
import userAvatar from 'public/userAvatar.jpg'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-500 py-6 flex justify-between px-4'>
      <h2 className='text-3xl'>Project</h2>
      <div className="flex items-center">
        <p className='text-gray-200 mx-4'>Username</p>
        <Image className='rounded-full mx-4' src = {userAvatar} width = {40} height = {40} alt = "user image" />
      </div>
    </div>
  )
}

export default Navbar