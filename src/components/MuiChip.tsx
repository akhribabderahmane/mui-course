import { Stack,Chip ,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

const MuiChip = () => {
    const handleDelete=()=>{

    }
  return (
    <Stack spacing={2} direction={'row'}>
        <Chip avatar={<Avatar>A</Avatar>}  label='Abderahmane' onDelete={handleDelete} variant='outlined'></Chip>
        <Chip icon={<FaceIcon />}  label='Abderahmane' onDelete={handleDelete} variant='outlined'></Chip>
        <Chip onClick={()=> alert('clicked')}  label='click' color='success' />
    </Stack>
  )
}

export default MuiChip