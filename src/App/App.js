/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from '../pages/EmployeeForm'
import Employees from '../pages/EmployeeTable'
import { useState, useEffect } from 'react'

function App() {
  const [records, setRecords] = useState([])
  console.log(records.length)

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
          <Route path='/employees' element={<Employees records={records} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
