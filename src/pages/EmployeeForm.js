/** @format */

import { Grid } from '@mui/material'
import * as employeeService from '../services/employeeService'
import { useForm, Form } from '../components/useForm'
import MuiInput from '../components/MuiInput'
import MuiSelect from '../components/MuiSelect'
import MuiDatePicker from '../components/MuiDatePicker'
import MuiButton from '../components/MuiButton'

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
  const {
    values,
    selectedBirthday,
    selectedHireDay,
    handleInputChange,
    handleBirthdayChange,
    handleHireDayChange
  } = useForm(initialFValues)

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
          <MuiDatePicker
            label='Date of Birth'
            value={selectedBirthday}
            onChange={handleBirthdayChange}
          />
          <MuiDatePicker
            label='Start Date'
            value={selectedHireDay}
            onChange={handleHireDayChange}
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
          <MuiInput
            name='street'
            label='Street'
            value={values.street}
            onChange={handleInputChange}
          />
          <MuiInput
            name='city'
            label='City'
            value={values.city}
            onChange={handleInputChange}
          />
          <MuiSelect
            name='state'
            label='state'
            value={values.state}
            onChange={handleInputChange}
            options={employeeService.getStatesCollection()}
          />
          <MuiInput
            name='zipCode'
            label='Zip Code'
            type='number'
            value={values.zipCode}
            onChange={handleInputChange}
          />
          <div className='buttons'>
            <MuiButton type='submit' text='Submit' />
            <MuiButton color='grey' text='Reset' />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
