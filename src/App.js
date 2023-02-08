import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import SignUp from './components/users/SignUp'
import LogIn from './components/users/LogIn'

import ManualJournals from './components/ManualJournals'
import TrialBalance from './components/reports/TrialBalance'
import IncomeStatement from './components/reports/IncomeStatement'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  const renderLogIn = (event) => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          // renderLogin()
          document.querySelector('.error-message').textContent = 'Please enter a password or email.'
        } else {
          // console.log('meow')
          setLoggedInUser(res)
          console.log(res)
          // console.log(loggedInUser)
          // Home()
        }
      })
  }

  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/sign_up' element={<SignUp />} />
        <Route path='/users/log_in' element={<LogIn renderLogIn={renderLogIn}/>} />
        <Route path='/trialBalance' element={<TrialBalance />} />
        <Route path='/incomeStatement' element={<IncomeStatement />} />
        <Route path='/create/manualJournal' element={<ManualJournals loggedInUser={loggedInUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
