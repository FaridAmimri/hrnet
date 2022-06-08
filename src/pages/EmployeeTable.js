/** @format */

import Header from '../components/Header'
import { useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel,
  Toolbar,
  InputAdornment
} from '@mui/material'
import { MuiTable } from '../utils/useTable'
import MuiInput from '../components/MuiInput'
import SearchIcon from '@mui/icons-material/Search'

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

function EmployeeTable({ records }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()
  const [filter, setFilter] = useState({
    fn: (items) => {
      return items
    }
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSortRequest = (cellId) => {
    const isAsc = orderBy === cellId && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(cellId)
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  const recordsAfterPagingAndSorting = () => {
    return stableSort(filter.fn(records), getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    )
  }

  const handleSearch = (e) => {
    let target = e.target.value
    setFilter({
      fn: (items) => {
        if (target === '') return items
        else
          return items.filter(
            (item) =>
              item.firstName.toLowerCase().includes(target) ||
              item.lastName.toLowerCase().includes(target) ||
              item.dateOfBirth.includes(target) ||
              item.department.toLowerCase().includes(target) ||
              item.startDate.includes(target) ||
              item.street.toLowerCase().includes(target) ||
              item.city.toLowerCase().includes(target) ||
              item.state.toLowerCase().includes(target) ||
              item.zipCode.includes(target)
          )
      }
    })
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
        <Toolbar>
          <MuiInput
            label='Search Employees'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            onChange={handleSearch}
          ></MuiInput>
        </Toolbar>
        <Table>
          <TableHead className='muiTableHead'>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => {
                      handleSortRequest(headCell.id)
                    }}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.dateOfBirth}</TableCell>
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

export default EmployeeTable
