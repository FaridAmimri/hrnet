/** @format */

import Header from '../components/Header'
import { useState } from 'react'
import { Grid } from '@mui/material'
import { useForm, Form } from '../utils/useForm'
import MuiInput from '../components/MuiInput'
import MuiSelect from '../components/MuiSelect'
import MuiDatePicker from '../components/MuiDatePicker'
import MuiButton from '../components/MuiButton'
import { Modal } from 'react-modal-css'
import * as employeeServices from '../services/employeeServices'

const initialFValues = {
  id: 0,
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  stateId: '',
  zipCode: '',
  departmentId: ''
}

function EmployeeForm({ setRecords }) {
  const [openModal, setOpenModal] = useState(false)
  const {
    values,
    setValues,
    errors,
    setErrors,
    dateOfBirth,
    startDate,
    handleInputChange,
    handleDateOfBirthChange,
    handleStartDayChange,
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
    if ('stateId' in fieldValues)
      temp.stateId =
        fieldValues.stateId.length !== 0 ? '' : 'This field is required.'
    if ('zipCode' in fieldValues)
      temp.zipCode =
        fieldValues.zipCode.length > 4 ? '' : 'Minimum 5 numbers required.'

    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '')
  }

  function formatDate(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}/${month}/${day}`.toString()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let departments = employeeServices.getDepartmentCollection()
    let states = employeeServices.getStateCollection()

    if (validate()) {
      setValues({
        ...values,
        dateOfBirth,
        startDate
      })
      setRecords((prevState) => {
        return [
          ...prevState,
          {
            ...values,
            dateOfBirth: formatDate(dateOfBirth),
            startDate: formatDate(startDate),
            department: departments[values.departmentId - 1].title,
            state: states[values.stateId - 1].title,
            id: employeeServices.generateEmployeeId()
          }
        ]
      })
      resetForm()
      // setOpenModal(true)
    }
  }

  return (
    <>
      <Header
        title='HRnet'
        subtitle='Create an employee'
        content='See employees'
        link={'/employees'}
      />
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
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              error={errors.dateOfBirth}
            />
            <MuiSelect
              name='departmentId'
              label='Department'
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeServices.getDepartmentCollection()}
              error={errors.departmentId}
            />
            <MuiDatePicker
              label='Start Date'
              value={startDate}
              onChange={handleStartDayChange}
              error={errors.startDate}
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
              name='stateId'
              label='State'
              value={values.stateId}
              onChange={handleInputChange}
              options={employeeServices.getStateCollection()}
              error={errors.stateId}
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
        {openModal && (
          <Modal
            title={<h1>Success !</h1>}
            content={<p>An employee has been added to your list.</p>}
            openModal={openModal}
            onClick={() => setOpenModal(false)}
          />
        )}
      </Form>
    </>
  )
}

export default EmployeeForm
