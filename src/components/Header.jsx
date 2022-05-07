/** @format */

import React from 'react'
import { Paper, Card, Typography } from '@mui/material'
import styled from 'styled-components'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'

function Header() {
  return (
    <HeaderWrapper>
      <Paper>
        <Card><PeopleOutlineOutlinedIcon /></Card>
        <HeaderContent>
          <Typography variant='h6'>HRnet</Typography>
          <Typography variant='subtitle2'>Create employee</Typography>
        </HeaderContent>
      </Paper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  margin-bottom: 20px;
  .css-1ps6pg7-MuiPaper-root {
    display: flex;
    justify-content: center;
    background-color: #f4f5fd;
  }
  .css-bhp9pd-MuiPaper-root-MuiCard-root {
    text-align: center;
    color: #3c44b1;
    border-radius: 12px;
    .css-i4bv87-MuiSvgIcon-root {
      font-size: 2.5rem;
    }
  }
  .css-2ulfj5-MuiTypography-root {
    text-align: center;
  }
  .css-ati914-MuiTypography-root {
    text-align: center;
  }
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`