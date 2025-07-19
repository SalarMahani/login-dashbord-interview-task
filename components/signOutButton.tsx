'use client'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

function SignOutButton() {
  const { setUser } = useUser()
  const router = useRouter()

  function handleSignOut() {
    // Clear localStorage
    setUser(null)
    localStorage.removeItem('user')
    // Reset user in Context API
    router.push('/')
  }

  return <button onClick={handleSignOut}>signOut</button>
}

export default SignOutButton
