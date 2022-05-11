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
    errors,
    setErrors,
    selectedBirthday,
    selectedHireDay,
    handleInputChange,
    handleBirthdayChange,
    handleHireDayChange,
    resetForm
  } = useForm(initialFValues, true, validate)

  function validate(fieldValues = values) {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? '' : 'This field is required.'
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? '' : 'This field is required.'
    if ('departmentId' in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? '' : 'This field is required.'
    if ('street' in fieldValues)
      temp.street = fieldValues.street ? '' : 'This field is required.'
    if ('city' in fieldValues)
      temp.city = fieldValues.city ? '' : 'This field is required.'
    if ('state' in fieldValues)
      temp.state =
        fieldValues.state.length !== 0 ? '' : 'This field is required.'
    if ('zipCode' in fieldValues)
      temp.zipCode =
        fieldValues.zipCode.length > 4 ? '' : 'Minimum 5 numbers required.'

    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) window.alert('test ok')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <MuiInput
            name='firstName'
            label='First Name'
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <MuiInput
            name='lastName'
            label='Last Name'
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <MuiDatePicker
            label='Date of Birth'
            value={selectedBirthday}
            onChange={handleBirthdayChange}
            error={errors.dateofBirth}
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
            error={errors.departmentId}
          />
        </Grid>
        <Grid item xs={6}>
          <MuiInput
            name='street'
            label='Street'
            value={values.street}
            onChange={handleInputChange}
            error={errors.street}
          />
          <MuiInput
            name='city'
            label='City'
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
          <MuiSelect
            name='state'
            label='state'
            value={values.state}
            onChange={handleInputChange}
            options={employeeService.getStatesCollection()}
            error={errors.state}
          />
          <MuiInput
            name='zipCode'
            label='Zip Code'
            type='number'
            value={values.zipCode}
            onChange={handleInputChange}
            error={errors.zipCode}
          />
          <div className='buttons'>
            <MuiButton type='submit' text='Submit' />
            <MuiButton color='grey' text='Reset' onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
