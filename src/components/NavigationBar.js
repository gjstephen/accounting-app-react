import './navigationBar.scss'
import { Link } from 'react-router-dom' 
import { useState} from 'react'

function NavigationBar({ loggedInUser, renderLogOut }) {

  const isLoggedIn = () => {
    if (loggedInUser) {
      return (<p onClick={renderLogOut}><Link to='/'>Log Out</Link></p>)
    } else {
      return (<p><Link to='/users/log_in'>Log In</Link></p>)
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
        <div className="user-btn">
          {isLoggedIn()}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar