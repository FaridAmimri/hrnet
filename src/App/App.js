/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import EmployeeForm from '../pages/EmployeeForm'
import Employees from '../pages/Employees'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<EmployeeForm />} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
