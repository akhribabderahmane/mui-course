import React,{useState} from 'react'
import {Stack,ToggleButton,ToggleButtonGroup} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
const TogglesButton = () => {
    const [format,setFormat]=useState<string | null>(null)
    console.log(format);
    const onHandleChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>{
        setFormat(updatedFormats);
        console.log(format);
    }
  return (
    <div className=' my-6'>
        <Stack display={'block'} direction={'row'}>
            <ToggleButtonGroup size='small' exclusive aria-label='text formating' value={format} onChange={onHandleChange}>
                  <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon /></ToggleButton>
                  <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon /></ToggleButton>
                  <ToggleButton value={'underlined'} aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </div>
  )
}

export default TogglesButton