'use client'
import { useUser } from '@/context/UserContext'
import SignOutButton from '@/components/signOutButton'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth')
    }
  }, [user, router])

  return (
    <div>
      {user ? (
        <>
          <h1>
            Welcome, {user.name.first} {user.name.last}
          </h1>
          <SignOutButton />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
