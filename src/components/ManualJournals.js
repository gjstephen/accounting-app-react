import { useState} from 'react'
import { useNavigate, Navigate} from 'react-router-dom'
import './mjStyle.scss'


function ManualJournals({ loggedInUser }) {
  const [debitTotal, setDebitTotal] = useState(0)
  const [creditTotal, setCreditTotal] = useState(0)
  const navigate = useNavigate()
  
  const addNewLine = () => {
    // document.querySelector('.table-rows').append(row)
    const newRow = document.createElement('form')
    newRow.innerHTML = row
    // console.log(row)
    document.querySelector('.table-rows').appendChild(newRow)
    // return row
  }

  const handleDebitChange = (event) => {
    const debits = document.querySelectorAll('.debit')
    // console.log(debits)
    let debitCounter = 0
    debits.forEach(debit => debitCounter += Number(debit.value))
    document.querySelector('.debit-subtotal').value = debitCounter
  }

  const handleCreditChange = (event) => {
    const credits = document.querySelectorAll('.credit')
    // console.log(credits)
    let creditCounter = 0
    credits.forEach(credit => creditCounter += Number(credit.value))
    document.querySelector('.credit-subtotal').value = creditCounter
  }

  const renderPostJournal = () => {
    const debits = document.querySelector('.debit-subtotal').value
    const credits = document.querySelector('.credit-subtotal').value
    
    if ((debits - credits) === 0 ) {
      const forms = document.querySelectorAll('.jrnl-line')
      // console.log(forms)
      for (const i in forms) {
        if (i >= 0) {
          // console.log(forms[i])
          // console.log('submit')
          postJournal(forms[i])
        }
      }
    } else {
      document.querySelector('.error-msg').innerHTML = `<h2>Your journal must balance to zero.</h2>`
    }
  }

  const postJournal = (form) => {
    let data = Object.fromEntries(new FormData(form))
    const date = document.querySelector('.date').value
    const narration = document.querySelector('.narration').value
    const jrnlNum = document.querySelector('.journal-number').value
    const entityId = document.querySelector('.entityId').value
    const userId = loggedInUser.id
    data = {...data, date, narration, jrnlNum, userId, entityId}
    // console.log(data)
    // navigate('/')
    // console.log('yes')
    
    fetch('/api/journals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(navigate('/reports/generalLedger'))
  }
  
  const isLoggedIn = () => {
    if (loggedInUser) {
      return loggedInUser.id
    } else {
      return (<Navigate to='/users/log_in'/>)
    }
  }

  const row = (
    <form className='table jrnl-line'>
      <section className='jrnl-row'>
        {/* <input type="text" name="journalNum"/>
        <input type="date" name="date" readOnly/> */}
        <input type="text" name="description"  />
        <input type="text" name="accNum"  />
        <input type="text" name="accName"  />
        <input type="text" name="currency" defaultValue='AUD' className=' numInput'/>
        <input type="text" name="debit" defaultValue='0' className=' numInput debit' onBlur={handleDebitChange}/>
        <input type="text" name="credit" defaultValue='0' className=' numInput credit' onBlur={handleCreditChange}/>
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
                <th>User Id</th>
                <th>Entity Id</th>
                <th>Journal Number</th>
                <th>Date</th>
                <th>Narration</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><p className='user-id'>{isLoggedIn()}</p></td>
                <td><input type="text" className='entityId numInput'/></td>
                <td><input type="text" className='journal-number numInput'/></td>
                <td><input type="date" className='date' required/></td>
                <td><textarea name="" id="" cols="40" rows="4" className='narration'></textarea></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='jrnl-entry'>
          <section className='table-header jrnl-row center'>
            {/* <h4 className='table-header'>Journal Number</h4>
            <h4 className='table-header'>Date</h4> */}
            <h4 className='table-header'>Line Description</h4>
            <h4 className='table-header'>Account Number</h4>
            <h4 className='table-header'>Account Name</h4>
            <h4 className='table-header'>Currency</h4>
            <h4 className='table-header'>Debit</h4>
            <h4 className='table-header'>Credit</h4>
          </section>

          <section className='table-rows center'>
            {row}
            {row}
          </section>

          <div className='new-line-btn'>
                <button onClick={addNewLine}>Add new line</button>
          </div>

          <div className="jrnl-cntrls">
            <div className="jrnl-subtotals">
              <label>Total</label>
              <input 
                className="debit-subtotal numInput" 
                type="text" readOnly 
                value='0.00'
              />

              <input 
                className="credit-subtotal numInput" 
                type="text" readOnly 
                value='0.00'
              />
              <br />
              <button onClick={renderPostJournal}>Post Journal</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className='error-msg'></div>

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