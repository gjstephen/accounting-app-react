import Home from '../Home'

function SignUp() {
  const checkPassword = (data) => {
    console.log(data)
    const { password, confirm_password } = data

    if (password === confirm_password) {
      return true
    } else {
      return false
    }
  }

  const renderSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    if (!checkPassword(data)) {
      document.querySelector('.error-message').textContent = 'Passwords do not match'
    } else {
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(() => Home())
    }
  }

  return (
    <div className="sign-up-form">
      <form onSubmit={renderSignUp}>
        <h3 className="error-message"></h3>
        <table>
          <tbody>
            <tr>
              <th>First Name:</th>
              <td><input type="text" name="first_name" required/></td>
            </tr>

            <tr>
              <th>Last Name:</th>
              <td><input type="text" name="last_name" required/></td>
            </tr>

            <tr>
              <th>Email Address:</th>
              <td><input type="text" name="email" required/></td>
            </tr>

            <tr>
              <th>Password:</th>
              <td><input type="password" name="password" required/></td>
            </tr>

            <tr>
              <th>Confirm Password:</th>
              <td><input type="password" name="confirm_password" required/></td>
            </tr>
          </tbody>
        </table>

        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp