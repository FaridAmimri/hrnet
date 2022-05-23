/** @format */

import { Alert, Snackbar } from '@mui/material'

function Notification({ notify, setNotify }) {
  const handleClose = (event, reason) => {
    setNotify({
      ...notify,
      isOpen: false
    })
  }

  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert severity='success' onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
