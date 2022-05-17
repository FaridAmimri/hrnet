/** @format */

import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import frLocale from 'date-fns/locale/fr';
import DatePicker from '@mui/lab/DatePicker'
import { TextField } from '@mui/material'

function MuiDatePicker(props) {
  const { label, value, onChange } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        value={value}
        onChange={onChange}
        inputFormat="dd/MM/yyyy"
      />
    </LocalizationProvider>
  )
}

export default MuiDatePicker
