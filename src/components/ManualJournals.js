import { useState} from 'react'
import { useNavigate, Navigate} from 'react-router-dom'
import './mjStyle.scss'


function ManualJournals({ loggedInUser }) {
  const navigate = useNavigate()
  
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

  // const checkNonZero = () => {

  // }

  const postJournal = (form) => {
    let data = Object.fromEntries(new FormData(form))
    const date = document.querySelector('.date').value
    const narration = document.querySelector('.narration').value
    const jrnlNum = document.querySelector('.journal-number').value
    const entityId = document.querySelector('.entityId').value
    const userId = loggedInUser.id
    data = {...data, date, narration, jrnlNum, userId, entityId}
    console.log(data)
    // navigate('/')
    // console.log('yes')
    
    fetch('/api/journals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(navigate('/'))
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
        <input type="text" name="debit" defaultValue='0' className=' numInput'/>
        <input type="text" name="credit" defaultValue='0' className=' numInput'/>
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

        <section className='table-header jrnl-row'>
          {/* <h4 className='table-header'>Journal Number</h4>
          <h4 className='table-header'>Date</h4> */}
          <h4 className='table-header'>Line Description</h4>
          <h4 className='table-header'>Account Number</h4>
          <h4 className='table-header'>Account Name</h4>
          <h4 className='table-header'>Currency</h4>
          <h4 className='table-header'>Debit</h4>
          <h4 className='table-header'>Credit</h4>
        </section>

        <section className='table-rows'>
          {row}
          {row}
          <div className='new-line-btn'>
            {/* <div> */}
              <button onClick={addNewLine}>Add new line</button>
            {/* </div> */}
          </div>
        </section>
      </div>

      <div className="jrnl-cntrls">

        <div className="jrnl-subtotals">
          <label>Total</label>
          <input 
            className="debit-subtotals numInput" 
            type="text" readOnly 
            value='0.00'
          />

          <input 
            className="credit-subtotals numInput" 
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