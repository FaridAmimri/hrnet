/** @format */

import { useState } from 'react'
import styled from 'styled-components'

export function useForm(initialFValues) {
    
  const [values, setValues] = useState(initialFValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return {
    values,
    setValues,
    handleInputChange
  }
}

const FormWrapper = styled.form`
  margin: 30px;
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 80%;
  }
`

export function Form(props) {
  return <FormWrapper>{props.children}</FormWrapper>
}
