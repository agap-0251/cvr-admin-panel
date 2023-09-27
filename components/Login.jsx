'use client'

import { useState } from 'react'
import {useRouter} from 'next/navigation'

const Login = () => {

    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useRouter()
    

    const handleLogin = () => {
        if(email === 'cvr@gmail.com' && pass === 'cvr123') {
            return navigate.push('/students')
        }
    }

  return (
    <form>
        <h1>Admin Login</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter admin email..' />
        <input type='password' onChange={(e) => setPass(e.target.value)} value={pass} placeholder='Enter password' />

        <button type='button' onClick={handleLogin}>Login</button>
    </form>
  )
}

export default Login