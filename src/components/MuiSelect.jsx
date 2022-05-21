/** @format */

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'

function MuiSelect({ name, label, value, onChange, options, error = null }) {

  return (
    <FormControl variant='outlined'
    {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} value={value} onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}

export default MuiSelect
