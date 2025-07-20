'use client'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import styles from './page.module.scss'
import { handleValidation } from '@/utilities/handleValidation'
import { handleSubmit } from '@/utilities/handleSubmit'

function Page() {
  const { user, setUser } = useUser()
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('Phone number is required')
  const [hasLoggedIn, setHasLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setHasLoggedIn(false)
    setPhone(value)
    handleValidation({ value, setError })
  }

  const handleSubmits = () => {
    handleSubmit({
      phone,
      error,
      setError,
      setLoading,
      setUser,
      setHasLoggedIn,
      router,
    })
  }
  return (
    <form className={styles.centerForm}>
      <Input
        label={'phone number'}
        value={phone}
        onChange={handleChange}
        error={error}
      />

      <Button handleSubmit={handleSubmits} loading={loading} />
    </form>
  )
}

export default Page
