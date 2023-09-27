import { Box ,Tab} from '@mui/material'
import { TabContext,TabList,TabPanel } from '@mui/lab'
import * as React from 'react';
import { useState } from 'react';

const MuiTabs = () => {
    const [tab,setTab]=useState<string>('1')
    const handleChange=(event:React.SyntheticEvent,newValue:string)=>{
        setTab(newValue)
    }
  return (
    <Box>
        <TabContext value={tab}>
           <Box sx={{borderBottom:1,borderColor:'devider'}}>
              <TabList aria-label='tabs example' onChange={handleChange}>
               <Tab label='tab 1' value='1'/>
               <Tab label='tab 2' value='2'/>
               <Tab label='tab 3' value='3'/>
              </TabList>
           </Box>
           <TabPanel value='1'>Panel one</TabPanel>
           <TabPanel value='2'>Panel two</TabPanel>
           <TabPanel value='3'>Panel three</TabPanel>
        </TabContext>
    </Box>
  )
}

export default MuiTabs