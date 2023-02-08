function RenderJournalLines({journalLog}) {
  return journalLog?.map((journal, index) => {
    // console.log(journal)
    return (
      <tr className='jrnl' key={index}>
        <td>{journal.journal_number}</td>
        <td>{journal.date}</td>
        <td>{journal.jrnl_narration}</td>
        <td>{journal.account_number}</td>
        <td>{journal.account_name}</td>
        <td>{journal.currency}</td>
        <td>{journal.debit}</td>
        <td>{journal.credit}</td>
      </tr>
    )
  }).join('')
}

export default RenderJournalLines