type ButtonPropsType = {
  handleSubmit: () => void
  error: string
  hasLoggedIn: boolean
}

function Button({ handleSubmit, error, hasLoggedIn }: ButtonPropsType) {
  return (
    <>
      <div onClick={handleSubmit}>login</div>
      {hasLoggedIn && error && <span>{error}</span>}
    </>
  )
}

export default Button
