'use client'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import styles from '../styles/signOutButton.module.scss'

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

  return (
    <div onClick={handleSignOut} className={styles.Button}>
      signout
    </div>
  )
}

export default SignOutButton
