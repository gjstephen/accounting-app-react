import { useState} from 'react'
import './mjStyle.scss'


function ManualJournals({ loggedInUser }) {
  const [ transactionLines, setNumLines ] = useState(4)

  const addNewLine = () => {
    // document.querySelector('.jrnl-lines').append(row)
    return row
  }

  const renderPostJournal = () => {
    const forms = document.querySelectorAll('.jrnl-line')
    console.log(forms)
    for (const i in forms) {
      if (i >= 0) {
        // console.log(forms[i])
        // console.log('submit')
        postJournal(forms[i])
      }
    }
  }

  const postJournal = (form) => {
    // console.log('meow')
    // event.preventDefault()
    // const form = event.target
    const data = Object.fromEntries(new FormData(form))
    // console.log(data)

    fetch('/api/journals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
  }

  const row = (
    <form className='table jrnl-line'>
            <input type="text" name="journalNum"/>
            <input type="date" name="date" readOnly/>
            <input type="text" name="accNum"  />
            <input type="text" name="accName"  />
            <input type="text" name="currency" defaultValue='AUD'/>
            <input type="text" name="debit" />
            <input type="text" name="credit" />
    </form>
  )

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
                <th>User Id</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><textarea name="" id="" cols="40" rows="4"></textarea></td>
                <td><input type="date" /></td>
                <td><input type="text" /></td>
                <td><p>{loggedInUser.id}</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <table>
          <thead>
            <tr>
              <th>Journal Number</th>
              <th>Date</th>
              <th>Account Number</th>
              <th>Account Name</th>
              <th>Currency</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
        </table>

        <section>
          {row}
          {row}
        </section>
      </div>

      <div className="jrnl-cntrls">
        <button onClick={addNewLine}>Add new line</button>

        <div className="jrnl-subtotals">
          <label>Total</label>
          <input 
            className="debit-subtotals" 
            type="text" readOnly 
            value='0.00'
          />

          <input 
            className="credit-subtotals" 
            type="text" readOnly 
            value='0.00'
          />
        </div>

        <button onClick={renderPostJournal}>Post Journal</button>
      </div>
    </div>
  )
}

export default ManualJournals


// const row = (
//   <form className='table jrnl-line' onSubmit={postJournal}>
//     <table>
//       <tbody>
//         <tr>
//           <td><input type="text" name="jrnl-num"/></td>
//           <td><input type="date" name="date" readOnly/></td>
//           <td><input type="text" name="acc-num"  /></td>
//           <td><input type="text" name="acc-name"  /></td>
//           <td><input type="text" name="currency" defaultValue='AUD'/></td>
//           <td><input type="text" name="debit-input" /></td>
//           <td><input type="text" name="credit-input" /></td>
//         </tr>
//       </tbody>
//     </table>
//   </form>
// )