import { Stack,Button,ButtonGroup } from '@mui/material'
import React from 'react'

const MuiBtnsGroup = () => {
  return (
    <div>
        <Stack display={'block'}  direction={'row'}>
            <ButtonGroup variant='contained' color='secondary' orientation='vertical' size='small'>
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
            </ButtonGroup>
        </Stack>
    </div>
  )
}

export default MuiBtnsGroup