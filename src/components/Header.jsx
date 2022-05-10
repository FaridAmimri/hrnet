/** @format */

import { Paper, Card, Typography } from '@mui/material'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import styled from 'styled-components'

function Header() {
  return (
    <HeaderWrapper>
      <Paper>
        <Card>
          <PeopleOutlineOutlinedIcon />
        </Card>
        <HeaderContent>
          <Typography variant='h6'>HRnet</Typography>
          <Typography variant='subtitle2'>Create employee</Typography>
        </HeaderContent>
        <HeaderLink href='/employees'>See Employees</HeaderLink>
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
    padding: 15px;
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

const HeaderLink = styled.a`
  position: absolute;
  right: 25px;
  top: 30px;
  text-decoration-line: none;
  color: #3c44b1;
`
