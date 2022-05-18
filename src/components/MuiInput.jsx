/** @format */

import { TextField } from '@mui/material'

function MuiInput(props) {
  const { name, label, value, onChange, error = null, ...other } = props

  return (
    <TextField
      variant='outlined'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default MuiInput
