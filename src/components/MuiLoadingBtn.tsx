import * as React from 'react';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'

export const MuiLoadingBtn = () => {
    const [loading,setLoading]=useState(false)
    setTimeout(() => {
       setLoading(true)  
    }, 6000);
  return (
    <Stack spacing={2} direction={'row'}>
        <LoadingButton size='large' variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading size='large' variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading={loading} loadingIndicator='loading...' size='large' variant='outlined'>Fetch Data</LoadingButton>
    </Stack>
  )
}
