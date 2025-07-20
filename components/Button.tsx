import styles from '../styles/Button.module.scss'

type ButtonPropsType = {
  handleSubmit: () => void
  error: string
  hasLoggedIn: boolean
}

function Button({ handleSubmit, error, hasLoggedIn }: ButtonPropsType) {
  return (
    <div className={styles.ButtonContainer}>
      <div onClick={handleSubmit} className={styles.Button}>
        <span className={styles.span}>Login</span>
      </div>
      {/*<span className={styles.span}>{hasLoggedIn && error ? error : ''}</span>*/}
      {/*{&& <span>{error}</span>}*/}
    </div>
  )
}

export default Button
