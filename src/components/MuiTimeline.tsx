import { Stack } from '@mui/material'
import React from 'react'
import { Timeline,TimelineContent,TimelineSeparator,TimelineDot,TimelineItem,TimelineConnector } from '@mui/lab'
const MuiTimeline = () => {
  return (
    <Timeline>
        <TimelineItem>
           <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
           </TimelineSeparator>
           <TimelineContent>Eat</TimelineContent>
        </TimelineItem> 
        <TimelineItem>
           <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
           </TimelineSeparator>
           <TimelineContent>Code</TimelineContent>
        </TimelineItem>  
        <TimelineItem>
           <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
           </TimelineSeparator>
           <TimelineContent>Sleep</TimelineContent>
        </TimelineItem> 
    </Timeline>
  )
}

export default MuiTimeline