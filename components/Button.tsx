import styles from '../styles/Button.module.scss'
import Spinner from '@/components/Spinner'

type ButtonPropsType = {
  handleSubmit: () => void
  loading: boolean
}

function Button({ handleSubmit, loading }: ButtonPropsType) {
  return (
    <div className={styles.ButtonContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <div onClick={handleSubmit} className={styles.Button}>
          <span className={styles.span}>Login</span>
        </div>
      )}
    </div>
  )
}

export default Button
