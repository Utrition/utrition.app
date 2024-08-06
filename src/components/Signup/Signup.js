import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import "./Signup.css"

export default function Signup () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>

      <Button
        className="singnup-button"
        variant="contained"
        onClick={handleOpen}
      >
        Signup
        <NavigateNextIcon/>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='signup-modal'>
          <h1>Signup</h1>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Style me.
          </Typography>
        </Box>
      </Modal>
      
    </React.Fragment>
    
  )
}

