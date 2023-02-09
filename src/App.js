import './App.css';
import { Routes, Route, redirect, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import SignUp from './components/users/SignUp'
import LogIn from './components/users/LogIn'

import ManualJournals from './components/ManualJournals'
import Reports from './components/reports/Reports'
import GeneralLedger from './components/reports/GeneralLedger'
import TrialBalance from './components/reports/TrialBalance'
import IncomeStatement from './components/reports/IncomeStatement'

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [journalLog, setJournalLog] = useState(null)
  const navigate = useNavigate()

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
          document.querySelector('.error-message').textContent = 'Please enter a password or email.'
        } else {
          setLoggedInUser(res)
          navigate('/')
        }
      })
  }

  const renderLogOut = () => {
    fetch('/api/sessions', {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(res => setLoggedInUser(res))
  }
  
  const getGeneralLedger = () => {
    if (loggedInUser) {
      fetch(`/api/journals/${loggedInUser.id}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(journals => setJournalLog(journals))
    }
  }

  // useEffect(getGeneralLedger, loggedInUser)
  useEffect(() => {
    if (loggedInUser) {
      getGeneralLedger()
    }
  }, [loggedInUser])

  return (
    <div className="App">
      <header>
        <NavigationBar 
          loggedInUser={loggedInUser}
          renderLogOut={renderLogOut}
        />
      </header>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users/sign_up' element={<SignUp />}/>
        <Route 
          path='/users/log_in' 
          element={
            <LogIn 
              renderLogIn={renderLogIn} 
              loggedInUser={loggedInUser}
          />} 
        />

        <Route path='/reports' element={<Reports />}>
          <Route 
            path='generalLedger' 
            element={<GeneralLedger 
              loggedInUser={loggedInUser}
              journalLog={journalLog}
            />} 
          />
          <Route 
            path='trialBalance' 
            element={<TrialBalance loggedInUser={loggedInUser}/>} 
          />
          <Route 
            path='incomeStatement' 
            element={<IncomeStatement />} 
          />
        </Route>

        <Route 
          path='/create/manualJournal' 
          element={<ManualJournals loggedInUser={loggedInUser}/>} 
        />
      </Routes>
    </div>
  );
}

export default App;
