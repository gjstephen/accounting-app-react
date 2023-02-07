import Home from '../Home'
import { useState, useEffect } from 'react'

function LogIn() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const renderLogIn = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          // renderLogin()
          document.querySelector('.error-message').textContent = 'Please enter a password or email.'
        } else {
          // console.log('meow')
          setLoggedInUser(res)
          // console.log(res)
          // console.log(loggedInUser)
          // Home()
        }
      })
  }

  return (
    <div className="log_in_form">
      <form onSubmit={renderLogIn}>
        <h3 className="error-message"></h3>
        <table>
          <tbody>
            <tr>
              <th>Email Address:</th>
              <td><input type="text" name="email" required/></td>
            </tr>
            <tr>
              <th>Password:</th>
              <td><input type="password" name="password" required/></td>
            </tr>
          </tbody>
        </table>

        <button>Log In</button>
      </form>
    </div>
  )
}

export default LogIn