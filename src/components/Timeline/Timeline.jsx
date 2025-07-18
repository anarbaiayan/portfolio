import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import './Timeline.css';
import Typography from '@mui/material/Typography';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className='timeline'>
      {/* Timeline header*/}
      <TimelineItem className='timeline_firstItem'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timeline_header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
      {/* remaining items */}

    </Timeline>
  )
}

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className='timeline_separator_padding'>
    <TimelineDot variant='outlined' className='timeline_dot' />
    <TimelineConnector />
  </TimelineSeparator>
)

export default CustomTimeline
