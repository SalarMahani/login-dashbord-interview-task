'use client'
import Input from '@/components/Input'
import { useState } from 'react'
import Button from '@/components/Button'

function Page() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('Phone number is required')
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

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
      setError('you need to  enter a valid Iranian phone number to continue!')
      return
    } else {
    }
  }

  return (
    <div>
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
    </div>
  )
}

export default Page
