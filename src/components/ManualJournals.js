const row = (
  <tr>
    <td><input type="text" /></td>
    <td><input type="text" /></td>
    <td><input type="text" value='AUD'/></td>
    <td><input type="text" className="debit-input" /></td>
    <td><input type="text" className="credit-input" /></td>
  </tr>
)

function ManualJournals() {
  
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
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><textarea name="" id="" cols="40" rows="4"></textarea></td>
                <td><input type="date" /></td>
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

          <tbody>
            {row}
            {row}
            {row}
            {row}
          </tbody>
        </table>
      </div>

      <div className="jrnl-cntrls">
        <button>Add new line</button>

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

        <button>Post Journal</button>
      </div>
    </div>
  )
}

export default ManualJournals