import { Stack,Avatar,AvatarGroup } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
  return (
    <Stack spacing={4} marginBottom={6}>
      <Stack direction={'row'} spacing={1}>
        <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor:'success.light'}}>BW</Avatar>
      </Stack>
      <Stack direction={'row'} spacing={1}>
        <AvatarGroup max={2}>
        <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
        <Avatar sx={{backgroundColor:'success.light'}}>BW</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' />
        <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' />
        </AvatarGroup>
      </Stack>
      <Stack direction={'row'} spacing={1}>
        <Avatar sx={{backgroundColor:'primary.light',width:48,height:48}} variant='square'>BW</Avatar>
        <Avatar sx={{backgroundColor:'success.light'}} variant='rounded'>BW</Avatar>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar