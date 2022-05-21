/** @format */

import { Button } from '@mui/material'

function MuiButton({ text, size, color, variant, onClick, ...other }) {

  return (
    <Button
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
    >
      {text}
    </Button>
  )
}

export default MuiButton
