/** @format */

import { Table, TableHead, TableRow, TableCell } from '@mui/material'

export default function useTable(records, headCells) {

  const TableContainer = (props) => {
    return (
      <Table>
        {props.children}
      </Table>
    )
  }

  const TableHeader = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  return {
    TableContainer,
    TableHeader
  }

}
