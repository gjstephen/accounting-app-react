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
    // console.log(forms)
    for (const i in forms) {
      if (i >= 0) {
        // console.log(forms[i])
        // console.log('submit')
        postJournal(forms[i])
      }
    }
  }

  const postJournal = (form) => {
    let data = Object.fromEntries(new FormData(form))
    const date = document.querySelector('.date')
    const narration = document.querySelector('.narration')
    const jrnlNum = document.querySelector('.journal-number')
    const userId = document.querySelector('.userId')
    data = {...data, date, narration, jrnlNum, userId}
    console.log(data)

    // fetch('/api/journals', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
  }

  const row = (
    <form className='table jrnl-line'>
      <section className='jrnl-row'>
        {/* <input type="text" name="journalNum"/>
        <input type="date" name="date" readOnly/> */}
        <input type="text" name="accNum"  />
        <input type="text" name="accName"  />
        <input type="text" name="currency" defaultValue='AUD'/>
        <input type="text" name="debit" />
        <input type="text" name="credit" />
      </section>
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
                <td><textarea name="" id="" cols="40" rows="4" className='narration'></textarea></td>
                <td><input type="date" className='date'/></td>
                <td><input type="text" className='journal-number'/></td>
                <td><p className='user-id'>{loggedInUser.id}</p></td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className='jrnl-row'>
          {/* <h4 className='table-header'>Journal Number</h4>
          <h4 className='table-header'>Date</h4> */}
          <h4 className='table-header'>Account Number</h4>
          <h4 className='table-header'>Account Name</h4>
          <h4 className='table-header'>Currency</h4>
          <h4 className='table-header'>Debit</h4>
          <h4 className='table-header'>Credit</h4>
        </section>

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