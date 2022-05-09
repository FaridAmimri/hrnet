/** @format */

import { TextField } from '@mui/material'

function MuiInput(props) {
  const { name, label, value, onChange } = props

  return (
    <TextField
      variant='outlined'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}

export default MuiInput
