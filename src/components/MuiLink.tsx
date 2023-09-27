import { Stack,Link, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} margin={'16px'}>
        <Typography variant='h4'>
       <Link href='#' color={'secondary'} underline='hover'>Link</Link>
       </Typography>
    </Stack>
  )
}

export default MuiLink