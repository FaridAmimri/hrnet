/** @format */

import Header from '../components/Header'
import { useState } from 'react'
import { Paper, Table, TableBody, TableHead, TableRow, TableCell, TablePagination} from '@mui/material'
import { MuiTable } from '../utils/useTable'
import * as employeeService from '../services/employeeService'

const headCells = [
  { id: 'firstName', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'birthday', label: 'Date of Birth' },
  { id: 'department', label: 'Department' },
  { id: 'startDate', label: 'Start Date' },
  { id: 'street', label: 'Street' },
  { id: 'city', label: 'City' },
  { id: 'state', label: 'State' },
  { id: 'zipcode', label: 'Zip Code' }
]

const pages = [5, 10, 25]

function Employees() {
  
  const [records, setRecords] = useState(employeeService.getAllEmployees())
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const recordsAfterPagingAndSorting = () => {
    return records.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
  }

  return (
    <MuiTable>
      <Header
        title='HRnet'
        subtitle='Employees List'
        content='Add an employee'
        link={'/'}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.startDate}</TableCell>
                <TableCell>{item.street}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.state}</TableCell>
                <TableCell>{item.zipCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          component='div'
          page={page}
          rowsPerPageOptions={pages}
          rowsPerPage={rowsPerPage}
          count={records.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </MuiTable>
  )
}

export default Employees
