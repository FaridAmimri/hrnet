/** @format */

import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import { TextField } from '@mui/material'

function MuiDatePicker(props) {
  const { label, value, onChange } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        value={value}
        onChange={onChange}
      />
    </LocalizationProvider>
  )
}

export default MuiDatePicker
