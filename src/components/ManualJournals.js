import { useState} from 'react'

const row = (
  <tr>
    <td><input type="text" className="acc-num"  /></td>
    <td><input type="text" className="acc-name"  /></td>
    <td><input type="text" className="currency"  value='AUD'/></td>
    <td><input type="text" className="debit-input" /></td>
    <td><input type="text" className="credit-input" /></td>
  </tr>
)

function ManualJournals() {
  const [ transactionLines, setNumLines ] = useState(4)
  
  const addNewLine = () => {
    // document.querySelector('.jrnl-lines').append(row)
    return row
  }

  const postJournal = () => {
    const accNum = document.querySelectorAll('.acc-num')
    for (const i in accNum) {
      if (i >= 0) {
        console.log(accNum[i].value)
      }
    }
  }

  return (
    <div>
      <h1>Lets create a Manual Journal</h1>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Narration</th>
                <th>Date</th>
                <th>Journal Number</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><textarea name="" id="" cols="40" rows="4"></textarea></td>
                <td><input type="date" /></td>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <table>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Account Name</th>
              <th>Currency</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>

          <tbody className='jrnl-lines'>
            {row}
            {row}
            {row}
            {row}
          </tbody>
        </table>
      </div>

      <div className="jrnl-cntrls">
        <button onClick={addNewLine}>Add new line</button>

        <div className="jrnl-subtotals">
          <label>Total</label>
          <input 
            className="debit-subtotals" 
            type="text" readonly 
            value='0.00'
          />

          <input 
            className="credit-subtotals" 
            type="text" readonly 
            value='0.00'
          />
        </div>

        <button onClick={postJournal}>Post Journal</button>
      </div>
    </div>
  )
}

export default ManualJournals