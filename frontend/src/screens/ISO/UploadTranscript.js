import React from 'react'
import SelectLabels from '../../components/SelectLabels'
import StyledTable from '../../components/StyledTable'
import Button from '@mui/material/Button';

export default function UploadTranscript() {
  return (
    <div>
        <h1>Transcripts</h1>
        <div style={{display: "flex", justifyContent: "space-between",}}>
          <div>
            <h2>Select University</h2>
            <SelectLabels label="Select"/>
          </div>
          <div>
            <h2>Select Semester</h2>
            <SelectLabels label="Select"/>
          </div>
          <div style={{marginRight: 30}}>
            <h2>Select Student</h2>
            <SelectLabels label="Select"/>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <StyledTable headers={headers} rows={rows}/>
        </div>
        <div style={{display: "block"}}>
          <div style={{marginTop: 30, display: "flex", justifyContent: "right"}}>
              <Button variant="contained">Add New Course</Button>
          </div>
          <div style={{marginTop: 10, display: "flex", justifyContent: "right"}}>
            <Button variant="contained">Submit</Button>
          </div> 
        </div>
    </div>
  )
}
