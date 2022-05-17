/** @format */

import { Table, TableHead, TableRow, TableCell } from '@mui/material'
import styled from 'styled-components'

export function useTable(records, headCells) {

  const TableHeader = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }


  const TableContainer = (props) => {
    return <Table>{props.children}</Table>
  }

  return {
    TableHeader,
    TableContainer  }
}

export function MuiTable(props) {
  const { children, ...other } = props

  return (
    <TableHeadWrapper {...other}>
      {props.children}
    </TableHeadWrapper>
  )
}

const TableHeadWrapper = styled.div`
  .css-15wwp11-MuiTableHead-root {
    background-color: #0000ff24;
  }
`
