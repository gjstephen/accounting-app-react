import { useState, useEffect } from 'react'
import { formatBalance } from './reportFormatting'

function TrialBalance({ loggedInUser }) {
  const [trialBalance, setTrialBalance] = useState(null)
  
  const getTrialBalance = () => {
    if (loggedInUser) {
      fetch(`/api/journals/trialBalance/${loggedInUser.id}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(journals => setTrialBalance(journals))
    }
  }

  useEffect(getTrialBalance, [])

  const renderTrialBalance = () => {
    return trialBalance
    ?.sort((a, b) => {
      if (a.journal_number === b.journal_number) {
        return a.account_number - b.account_number
      }
    })
    .map((account, index) => {
      return (
        <tr key={index}>
          <td>{account.account_number}</td>
          <td>{account.account_name}</td>
          <td>{formatBalance(account.total_debits, account.total_credits)}</td>
        </tr>
      )
    })
  }

  const netTrialBalance = () => {
    const net = trialBalance?.reduce((total, account) => {
      return total + Number(account.total_debits) - Number(account.total_credits)
    }, 0)
    return net
  }

  return (
    <div className='tb-body'>
      <h1>Trial Balance</h1>

      <table>
        <thead>
          <tr>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Balance</th>
          </tr>
        </thead>

        <tbody>
          {renderTrialBalance()}
        </tbody>
      </table>
      <div className='sum-total'>
        <h4>Net Balance:</h4>
        <h4>{netTrialBalance()}</h4>
      </div>
    </div>
  )
}

export default TrialBalance