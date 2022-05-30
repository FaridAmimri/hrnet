/** @format */

import { useState } from 'react'
import styled from 'styled-components'

export function useForm(initialFValues, validateOnChange=false, validate) {

  const [values, setValues] = useState(initialFValues)
  const [errors, setErrors] = useState({})
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    if (validateOnChange)
    validate({ [name]: value })
  }

  const handleDateOfBirthChange = (newValue) => {
    setDateOfBirth(newValue)
  }

  const handleStartDayChange = (newValue) => {
    setStartDate(newValue)
  }

  const resetForm = () => {
    setValues(initialFValues)
    setDateOfBirth(null)
    setStartDate(null)
    setErrors({})
  }

  return {
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
  }
}

export function Form(props) {
  const { children, ...other } = props

  return (
    <FormWrapper {...other}>
      {props.children}
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  .css-11lq3yg-MuiGrid-root {
    height: 450px;
    background-color: white;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 80%;
  }
  .css-1nrlq1o-MuiFormControl-root {
    width: 80%;
  }
  .css-1osj8n2-MuiGrid-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 20px 0px 20px 50px;
  }
  .css-gj1fbr-MuiGrid-root {
    margin: auto;
  }
  .css-jh47zj-MuiButtonBase-root-MuiButton-root {
    margin-right: 20px;
    width: 100px;
  }
  .css-r99y1x-MuiButtonBase-root-MuiButton-root {
    background-color: #8080802b;
    width: 100px;
  }
`
