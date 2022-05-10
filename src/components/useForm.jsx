/** @format */

import { useState } from 'react'
import styled from 'styled-components'

export function useForm(initialFValues) {
  const [values, setValues] = useState(initialFValues)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue)
    console.log(selectedDate)
  }


  return {
    values,
    setValues,
    selectedDate,
    setSelectedDate,
    handleInputChange,
    handleDateChange
  }
}

export function Form(props) {
  return <FormWrapper>{props.children}</FormWrapper>
}

const FormWrapper = styled.form`
  margin: 30px;
  .css-11lq3yg-MuiGrid-root {
    height: 400px;
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
    padding: 20px;
    align-items: center;
  }
`
