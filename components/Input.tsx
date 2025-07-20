'use client'
import { ChangeEvent } from 'react'
import styles from '../styles/Input.module.scss'

type InputPropsType = {
  label: string
  error?: string
  type?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

function Input({
  label,
  error,
  type = 'text',
  onChange,
  value,
}: InputPropsType) {
  const borderStyle = error ? 'falseBorder' : 'correctBorder'
  const spanColor = error ? 'errorColor' : 'correctColor'
  return (
    <div className={styles.inputContainer}>
      <span className={`${styles.span} ${styles[spanColor]}`}>
        {error ? error : 'you are good to go'}
      </span>
      <input
        id={label}
        name={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`${styles.formInput} ${styles[borderStyle]}`}
      />
      <label htmlFor={label} className={styles.formLabel}>
        {label}
      </label>
    </div>
  )
}

export default Input
