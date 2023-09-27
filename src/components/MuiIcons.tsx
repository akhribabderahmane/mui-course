import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import {Stack,Button,IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiIcons = () => {
  return (
    <div>
      <Stack display={'block'} spacing={2} direction={'row'}>
        <HomeIcon color='primary' sx={{fontSize:'4em'}}></HomeIcon>
        <Button variant='contained' color='secondary' disableElevation  startIcon={<SendIcon />}>Send</Button>
        <Button variant='contained' color='secondary' endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label='send'><SendIcon color='info' /></IconButton>
      </Stack>
    </div>
  )
}

export default MuiIcons