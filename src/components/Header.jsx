/** @format */
import { Link } from 'react-router-dom'
import { Paper, Card, Typography } from '@mui/material'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import styled from 'styled-components'

function Header({ title, subtitle, content, link }) {
  return (
    <HeaderWrapper>
      <Paper className='muiPaper'>
        <Card className='muiCard'>
          <PeopleOutlineOutlinedIcon className='muiIcon'/>
        </Card>
        <HeaderContent>
          <Typography className='muiTypography' variant='h6'>{title}</Typography>
          <Typography className='muiTypography' variant='subtitle2'>{subtitle}</Typography>
        </HeaderContent>
        <HeaderLink>
          <Link to={link}>{content}</Link>
        </HeaderLink>
      </Paper>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  margin-bottom: 20px;
  .muiPaper {
    display: flex;
    justify-content: center;
    background-color: #f4f5fd;
    padding: 15px;
  }
  .muiCard {
    text-align: center;
    color: #3c44b1;
    border-radius: 12px;
  }
  .muiIcon {
    font-size: 2.5rem;
  }
  .muiTypography {
    text-align: center;
  }
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

const HeaderLink = styled.div`
  position: absolute;
  right: 25px;
  top: 30px;
  color: #3c44b1;
  a {
    text-decoration-line: none;
  }
`
