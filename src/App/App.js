/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from '../pages/EmployeeForm'
import Employees from '../pages/EmployeeTable'
import { useState } from 'react'
// import { useForm } from '../utils/useForm'
import * as employeeServices from '../services/employeeServices'

function App() {

  // const {
  //   values,
  // } = useForm()

  const [records, setRecords] = useState(employeeServices.getAllEmployees())

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeForm />} />
          <Route path='/employees' element={<Employees />} data={records} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
