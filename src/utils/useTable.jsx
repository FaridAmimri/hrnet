/** @format */

import styled from 'styled-components'

export function MuiTable({ children, ...other }) {
  return <TableHeadWrapper {...other}>{children}</TableHeadWrapper>
}

const TableHeadWrapper = styled.div`
  .css-15wwp11-MuiTableHead-root {
    background-color: #0000ff24;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 75%;
    margin: 2% 0;
  }
`
