import { useState, useEffect } from 'react'
import './reports.scss'
import { formatNumbers } from './reportFormatting'

function GeneralLedger({ loggedInUser}) {
  const [journalLog, setJournalLog] = useState(null)
  
  const getGeneralLedger = () => {
    if (loggedInUser) {
      fetch(`/api/journals/${loggedInUser.id}`, {
        method: 'GET'
      })
        .then(res => res.json())
        // .then(journals => console.log(journals))
        .then(journals => setJournalLog(journals))
    }
  }

  useEffect(getGeneralLedger, [])

  // const formatNumbers = (number, sign) => {
  //   const formattedNum = []
  //   number.toFixed(2).split('').reverse()
  //     .forEach((digit, index) => {
  //       if (index % 3 === 0 && index !== 3 && index !== 0) {
  //         formattedNum.push(',')
  //       }
  //       formattedNum.push(digit)
  //     })
      
  //   if (number === 0) {
  //     return '-'
  //   } else if (sign === 'debit') {
  //     return formattedNum.reverse().join('')
  //   } else if (sign === 'credit') {
  //     return `(${formattedNum.reverse().join('')})`
  //   }
  // }

  const renderJournalLines = () => {
    return journalLog
      ?.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      .sort((a, b) => {
        if (a.date === b.date) {
          return a.journal_number - b.journal_number
        }
      })
      .sort((a, b) => {
        if (a.journal_number === b.journal_number) {
          return a.account_number - b.account_number
        }
      })
      .map((journal, index) => {
        return (
          <tr className='jrnl' key={index}>
            <td>{journal.journal_number}</td>
            <td>{journal.date.slice(0,10).split('-').reverse().join('/')}</td>
            <td>{journal.jrnl_narration}</td>
            <td>{journal.account_number}</td>
            <td>{journal.account_name}</td>
            <td>{journal.currency}</td>
            <td>{formatNumbers(journal.debit, 'debit')}</td>
            <td>{formatNumbers(journal.credit, 'credit')}</td>
          </tr>
        )
    })
  }

  return (
    <div>
      <h1>Detailed General Ledger</h1>

      <table>
        <thead>
          <tr>
            <th>Journal Number</th>
            <th>Date</th>
            <th>Narration</th>
            <th>Account Number</th>
            <th>Account Name</th>
            <th>Currency</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {renderJournalLines()}
        </tbody>
      </table>
    </div>
  )
}

export default GeneralLedger