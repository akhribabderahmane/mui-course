import React from 'react'
import { Tooltip,IconButton,Chip,Avatar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FaceIcon from '@mui/icons-material/Face'
const MuiTooltip = () => {
    const handleDelete=()=>{

    }
const deleteMessage=<Chip icon={<FaceIcon />}  label='Abderahmane' onDelete={handleDelete} color='success'></Chip>

  return (
    <div>
        <Tooltip title={deleteMessage} placement='top' arrow>
        <IconButton>
            <DeleteIcon />
        </IconButton>
        </Tooltip>
    </div>
  )
}

export default MuiTooltip