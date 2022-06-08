/** @format */

import styled from 'styled-components'

export function MuiTable({ children, ...other }) {
  return <TableHeadWrapper {...other}>{children}</TableHeadWrapper>
}

const TableHeadWrapper = styled.div`
  .muiTableHead {
    background-color: #0000ff24;
  }
  .muiTextField {
    width: 75%;
    margin: 2% 0;
  }
`
