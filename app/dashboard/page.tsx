'use client'
import { useUser } from '@/context/UserContext'
import SignOutButton from '@/components/signOutButton'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

export default function DashboardPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
    }
  }, [user, router])

  return (
    <div className={styles.dashboardContainer}>
      {user ? (
        <div>
          <h1>
            Welcome, {user.name.first} {user.name.last}
          </h1>
          <SignOutButton />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
