import './navigationBar.scss'
import { Link } from 'react-router-dom' 
import { useState} from 'react'

function NavigationBar() {
  let [ loggedInUser, setLoggedInUser ] = useState(null)

  const isLoggedIn = () => {
    // console.log('meow')
    fetch('/api/sessions')
      .then(res => res.json())
      // .then(res => renderLogInButton(res))
      .then(res => setLoggedInUser(res))
      .then(() => renderLogInButton())
      .then(() => {
        if (!loggedInUser) {
          return (<p><Link to='/'>Log Out</Link></p>)
        } else {
          return (<p><Link to='/users/log_in'>Log In</Link></p>)
        } 
    })
  }

  const renderLogInButton = (res) => {
    // console.log(loggedInUser)
    if (res) {
      document.querySelector('.user-btn').innerHTML = `<p><Link to='/'>Log Out</Link></p>`
    } else {
      document.querySelector('.user-btn').innerHTML = `<p><Link to='/users/log_in'>Log In</Link></p>`
    } 
  }

  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-option">
          <Link to='/'>Home</Link>
        </li>
        
        <li className="nav-option">
          <p>Reports</p>
          <div className="nav-dropdown div-reports">
            <ul>
              <li><Link to='/trialBalance'>Trial Balance</Link></li>
              <li><Link to='/incomeStatement'>Income Statement</Link></li>
            </ul>
          </div>
        </li>

        <li className="nav-option">
          <p>Create</p>
          <div className="nav-dropdown" >
            <ul>
              <li><Link to='/create/manualJournal'>Manual Journal</Link></li>
            </ul>
          </div>
        </li>

      </ul>
      
      <div className="user-info">
        <p><Link to='/users/sign_up'>Sign Up</Link></p>
        <div className="user-btn"></div>
        {isLoggedIn()}
      </div>
    </div>
  )
}

export default NavigationBar