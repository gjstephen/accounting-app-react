import './navigationBar.scss'
import { Link } from 'react-router-dom' 
import { useState} from 'react'

function NavigationBar({ loggedInUser, renderLogOut }) {

  const isLoggedIn = () => {
    if (loggedInUser) {
      return (<div className='user-btns'><p onClick={renderLogOut}><Link to='/'>Log Out</Link></p></div>)
    } else {
      return (
        <div className='user-btns'>
          <p><Link to='/users/sign_up'>Sign Up</Link></p>
          <p><Link to='/users/log_in'>Log In</Link></p>
        </div>
      )
    }
  }

  return (
    <div className="nav-bar">
      <div className='nav-options'>
        <ul>
          <li className="nav-option">
            <Link to='/'>Home</Link>
            <hr />
          </li>
          
          <li className="nav-option">
            <p>Reports</p>
            <hr />
            <div className="nav-dropdown div-reports">
              <ul className='dropdown-options'>
                <li><Link to='/reports/generalLedger'>General Ledger</Link></li>
                <li><Link to='/reports/trialBalance'>Trial Balance</Link></li>
                <li><Link to='/reports/incomeStatement'>Income Statement</Link></li>
              </ul>
            </div>
          </li>

          <li className="nav-option">
              <p className='nav-option-title'>Create</p>
              <hr />
            <div className="nav-dropdown" >
              <ul>
                <li><Link to='/create/manualJournal'>Manual Journal</Link></li>
              </ul>
            </div>
          </li>

        </ul>
      </div>
      
      <div className="user-info">
        
        <div className="user-btn">
          {isLoggedIn()}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar