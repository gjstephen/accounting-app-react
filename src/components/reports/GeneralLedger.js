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
        .then(journals => sortJournalLines(journals))
    }
  }

  useEffect(getGeneralLedger, [])

  const sortJournalLines = (journals) => {
    const sortedJournals = journals
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


    setJournalLog(sortedJournals)
  }

  const renderJournalLines = () => {
    return journalLog?.map((journal, index) => {
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

  // const renderJournalNumbersFilter = () => {
  //   // console.log(journalLog)
  //   const uniqueJournals = new Set( 
  //     journalLog?.map(journal => journal.journal_number)
  //   )
  //   const uniqueNum = []
  //   uniqueJournals.forEach(num => {
  //     // console.log(num)
  //     uniqueNum.push(num)
  //   })
  //   return uniqueNum
  //     .sort((a, b) => a - b)  
  //     .map((num, index) => {
  //       return (<option key={index} value={num}>{num}</option>)
  //     }).join('')
  // }

  return (
    <div>
      <h1>Detailed General Ledger</h1>

      {/* <div className="filter-options">
        <label htmlFor="">Journal Number</label>
        <select name="journalFilter" id="">
          {renderJournalNumbersFilter()}
        </select>
      </div> */}

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