import { Link } from 'react-router-dom' 

function Home() {
  return (
    <div>
      <div className='home-text'>
        <h1>Welcome to the Simple Accounting App</h1>
        <p>You can record your transactions by creating manual journals.</p>
        <p>You can also review your transactions in the form of multiple different reports.</p>
        <p>Lets get started!</p>
      </div>

      <br/>
      <br/>

      <section className='link-options'>
        <div>
          <h3>Reports</h3>
          <ul>
            <li><Link to='/reports/generalLedger' className='home-link'>Detailed General Ledger</Link></li>
            <li><Link to='/reports/trialBalance' className='home-link'>Trial Balance</Link></li>
          </ul>
        </div>
        <div>
          <h3>Record Transactions</h3>
          <ul>
            <li><Link to='/create/manualJournal' className='home-link'>Manual Journal</Link></li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home