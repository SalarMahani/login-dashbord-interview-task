type handleValidationPropsType = {
  value: string
  setError: React.Dispatch<React.SetStateAction<string>>
}

export function handleValidation({
  value,
  setError,
}: handleValidationPropsType) {
  const isValid = /^9\d{9}$/.test(value)
  if (!value) {
    setError('Phone number is required')
  } else if (!isValid) {
    setError('This is not a valid Iranian phone number')
  } else {
    setError('')
  }
}
