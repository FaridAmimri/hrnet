/** @format */

import { TextField } from '@mui/material'

function MuiInput({ name, label, value, onChange, error = null, ...other }) {

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
