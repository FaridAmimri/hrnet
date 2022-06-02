/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from '../pages/EmployeeForm'
import EmployeeTable from '../pages/EmployeeTable'
import { useState, useEffect } from 'react'

function App() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    if (localStorage.getItem('employees') !== null)
      setRecords(JSON.parse(localStorage.getItem('employees')))
  }, [])

  useEffect(() => {
    if (records.length > 0)
      localStorage.setItem('employees', JSON.stringify(records))
  }, [records])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeForm setRecords={setRecords} />} />
          <Route path='/employees' element={<EmployeeTable records={records} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
