/** @format */

import { Grid } from '@mui/material'
import * as employeeService from '../services/employeeService'
import { useForm, Form } from '../components/useForm'
import MuiInput from '../components/MuiInput'
import MuiSelect from '../components/MuiSelect'
import MuiDatePicker from '../components/MuiDatePicker'
// import { useState } from 'React'

const initialFValues = {
  id: 0,
  firstName: '',
  lastName: '',
  dateofBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  departmentId: ''
}

function EmployeeForm() {
  const { values, handleInputChange, handleDateChange } =
    useForm(initialFValues)

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <MuiInput
            name='firstName'
            label='First Name'
            value={values.firstName}
            onChange={handleInputChange}
          />
          <MuiInput
            name='lastName'
            label='Last Name'
            value={values.lastName}
            onChange={handleInputChange}
          />
          <MuiInput
            name='street'
            label='street'
            value={values.street}
            onChange={handleInputChange}
          />
          <MuiInput
            name='city'
            label='city'
            value={values.city}
            onChange={handleInputChange}
          />
          <MuiSelect
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          />
        </Grid>
        <Grid item xs={6}>
          <MuiDatePicker
            label='Date of Birth'
            value={values.dateofBirth}
            onChange={handleDateChange}
          />
          <MuiDatePicker
            label='Start Date'
            value={values.startDate}
            onChange={handleDateChange}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
