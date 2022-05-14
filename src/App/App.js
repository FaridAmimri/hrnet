/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeForm from '../pages/EmployeeForm'
import Employees from '../pages/Employees'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeForm />} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
