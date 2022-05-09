/** @format */

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

function MuiSelect(props) {
  const { name, label, value, onChange, options } = props

  return (
    <FormControl variant='outlined'>
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} value={value} onChange={onChange}>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default MuiSelect
