'use client'
import { ChangeEvent } from 'react'

type InputPropsType = {
  label: string
  placeholder?: string
  error?: string
  type?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

function Input({
  label,
  placeholder,
  error,
  type = 'text',
  onChange,
  value,
}: InputPropsType) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
      {!error && <span>you are good to go</span>}
    </div>
  )
}

export default Input
