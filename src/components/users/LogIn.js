import Home from '../Home'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function LogIn({ renderLogIn, loggedInUser }) {
  // const [loggedInUser, setLoggedInUser] = useState(null)

  const renderRedirect = () => {
    if (loggedInUser) {
      // return (<Navigate to='/'/>)
    }
  }

  return (
    <div className="log_in_form">
      {renderRedirect()}
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