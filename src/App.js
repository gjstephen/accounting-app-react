import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import SignUp from './components/users/SignUp'
import LogIn from './components/users/LogIn'

import ManualJournals from './components/ManualJournals'
import TrialBalance from './components/reports/TrialBalance'
import IncomeStatement from './components/reports/IncomeStatement'

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/sign_up' element={<SignUp />} />
        <Route path='/users/log_in' element={<LogIn />} />
        <Route path='/trialBalance' element={<TrialBalance />} />
        <Route path='/incomeStatement' element={<IncomeStatement />} />
        <Route path='/create/manualJournal' element={<ManualJournals />} />
      </Routes>
    </div>
  );
}

export default App;
