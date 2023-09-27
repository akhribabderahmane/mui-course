import { Stack,Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import React from 'react'

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={'row'} my={5}>
        <Badge badgeContent={100} max={999} showZero color='error'>
           <MailIcon sx={{fontSize:'40px',color:'#fefefe'}} />
        </Badge>
        <Badge  variant='dot' color='success'>
           <MailIcon sx={{fontSize:'30px',color:'#fefefe'}} />
        </Badge>
    </Stack>
  )
}

export default MuiBadge