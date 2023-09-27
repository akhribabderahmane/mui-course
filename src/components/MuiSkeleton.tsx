import { Stack,Skeleton } from '@mui/material'
import React from 'react'

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width={'300px'}>
       <Skeleton variant='circular' width={'70px'} height={'70px'} />
       <Skeleton variant='rectangular' width={'320px'} height={'170px'} animation='wave' />
    </Stack>
  )
}

export default MuiSkeleton