import './navigationBar.scss'
import { Link } from 'react-router-dom' 

function NavigationBar() {
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
              <li><Link to='/manualJournal/create'>Manual Journal</Link></li>
            </ul>
          </div>
        </li>

      </ul>
      
      <div className="user-info">
        <p>Hello</p>
      </div>
    </div>
  )
}

export default NavigationBar