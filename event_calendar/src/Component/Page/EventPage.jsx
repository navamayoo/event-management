import { Grid } from '@mui/material'
import React from 'react'
import TimeTable from './TimeTable'
// import Calendar from './Calendar'

export default function EventPage() {
    
  return (
      <>
      
      <Grid container spacing={2}>
  <Grid item xs={4}>
    {/* <Calendar> */}
  </Grid>
  <Grid item xs={8}>
    <TimeTable/>
  </Grid>

</Grid>
     
      </>
 
  )
}
