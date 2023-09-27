import React,{useState} from 'react'
import { Box,FormControlLabel,Switch } from '@mui/material'

const MuiSwitch = () => {
    const [darkMode,setDarkMode]=useState(false)
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setDarkMode(event.target.checked)
    } 
  return (
    <Box>
        <FormControlLabel control={<Switch checked={darkMode} onChange={handleChange} color='secondary'/>} label='Dark Mode' />
    </Box>
  )
}

export default MuiSwitch