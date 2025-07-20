import { UserType } from '@/types/user'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type HandleSubmitProps = {
  phone: string
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setUser: (user: UserType) => void
  setHasLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  router: AppRouterInstance
}

export async function handleSubmit({
  phone,
  error,
  setError,
  setLoading,
  setUser,
  setHasLoggedIn,
  router,
}: HandleSubmitProps): Promise<void> {
  setHasLoggedIn(true)

  if (error) {
    setError('you need to enter a valid Iranian phone number to continue!')
    return
  }

  setLoading(true)

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
  } finally {
    setLoading(false)
  }
}
