/** @format */

import { Dialog, Alert, AlertTitle } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'

function MuiModal({ openModal, setOpenModal }) {
  return (
    <Modal>
      <Dialog open={openModal} fullWidth={true}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'flex-end',
            margin: 10,
            color: '#ff000099'
          }}
          onClick={() => setOpenModal(false)}
        >
          <CloseIcon />
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: 30,
            justifyContent: 'center'
          }}
        >
          <Alert severity='success'>
            <AlertTitle>Success</AlertTitle>
            Employee has been created
          </Alert>
        </div>
      </Dialog>
    </Modal>
  )
}

export default MuiModal

const Modal = styled.div`
  min-width: 400px;
  min-height: 300px;
`
