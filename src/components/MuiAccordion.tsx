import React from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const MuiAccordion = () => {
  return (
    <Box width={'500px'}>
        <Accordion>
            <AccordionSummary id='panel-1' expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum, vitae laborum iure et commodi unde officiis voluptates facere nostrum eius. Necessitatibus eos adipisci, est cupiditate commodi possimus. Quos, distinctio.</Typography>
            </AccordionDetails>
        </Accordion>
    </Box> 
  )
}

export default MuiAccordion