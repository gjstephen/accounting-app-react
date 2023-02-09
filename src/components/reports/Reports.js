import { Routes, Route, redirect, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GeneralLedger from './GeneralLedger'
import TrialBalance from './TrialBalance'
import IncomeStatement from './IncomeStatement'

function Reports({ loggedInUser }) {

  return (
    <div className="reports">
      <Outlet />
    </div>
  )
}

export default Reports