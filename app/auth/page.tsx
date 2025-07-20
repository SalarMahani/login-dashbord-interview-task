'use client'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'

function Page() {
  const { user, setUser } = useUser()
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('Phone number is required')
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  console.log('user', user)

  function handleValidation(value: string) {
    const isValid = /^9\d{9}$/.test(value)
    if (!value) {
      setError('Phone number is required')
    } else if (!isValid) {
      setError('This is not a valid Iranian phone number')
    } else {
      setError('')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setHasLoggedIn(false)
    setPhone(value)
    handleValidation(value)
  }

  const handleSubmit = async () => {
    setHasLoggedIn(true)
    if (error) {
      setError('you need to enter a valid Iranian phone number to continue!')
      return
    }
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })

      if (!res.ok) {
        const { error } = await res.json()
        setError(error || 'Something went wrong')
        return
      }
      const user = await res.json()
      localStorage.setItem('user', JSON.stringify(user))
      setUser(user)
      router.push('/dashboard')
    } catch (e) {
      setError(`Login failed. ${e}`)
    }
  }

  return (
    <form className={styles.centerForm}>
      <Input
        label={'phone number'}
        value={phone}
        onChange={handleChange}
        error={error}
        placeholder={'like: 913 ...'}
      />

      <Button
        handleSubmit={handleSubmit}
        error={error}
        hasLoggedIn={hasLoggedIn}
      />
    </form>
  )
}

export default Page
