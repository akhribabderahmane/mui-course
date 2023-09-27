import React,{useState} from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
          <TextField label='Name' color='secondary' variant='outlined' />
          <TextField label='Name' color='secondary' variant='filled' />
          <TextField label='Name' color='secondary' variant='standard' />
        </Stack>
        <Stack spacing={2} direction={'row'}>
        <TextField label='small' size='small' color='secondary' variant='outlined' />
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <TextField label='form input' required value={value} error={!value} helperText={!value?'required':'do not share your information with anyone'} onChange={(e)=> setValue(e.target.value)} />
            <TextField label='password' type='password' disabled helperText='do not share your password with anyone' required />
            <TextField label='read only' inputProps={{readOnly:true}} />
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <TextField label='amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }} />
            <TextField label='weight' InputProps={{
                endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
            }} />
            <TextField label='icon' InputProps={{
                endAdornment:<InputAdornment position='end'><SendIcon></SendIcon></InputAdornment>
            }} />
         </Stack>
    </Stack >
  )
}

export default MuiTextField