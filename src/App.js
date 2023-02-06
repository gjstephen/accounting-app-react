import './App.css';
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import ManualJournals from './components/ManualJournals'
import TrialBalance from './components/reports/TrialBalance'
import IncomeStatement from './components/reports/IncomeStatement'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trialBalance' element={<TrialBalance />} />
        <Route path='/incomeStatement' element={<IncomeStatement />} />
        <Route path='/manualJournal/create' element={<ManualJournals />} />
      </Routes>
    </div>
  );
}

export default App;
