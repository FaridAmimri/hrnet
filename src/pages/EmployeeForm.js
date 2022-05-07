/** @format */

import { Grid, TextField } from '@mui/material'
import { useForm, Form } from '../components/useForm'

const initialFValues = {
  id: 0,
  firstName: '',
  lastName: '',
  dateofBirth: '',
  startDate: new Date(),
  street: '',
  city: '',
  state: '',
  zipCode: '',
  department: ''
}

function EmployeeForm() {
  const { values, setValues, handleInputChange } = useForm(initialFValues)

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='First Name'
            name='firstName'
            value={values.firstName}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='Last Name'
            name='lastName'
            value={values.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
