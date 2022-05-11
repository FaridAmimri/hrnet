/** @format */

import { TextField } from '@mui/material'

function MuiInput(props) {
  const { name, label, value, onChange, error = null } = props

  return (
    <TextField
      variant='outlined'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default MuiInput
