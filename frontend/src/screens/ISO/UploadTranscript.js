import React, { useState } from 'react'
import SelectLabels from '../../components/SelectLabels'
import StyledFormTable from '../../components/StyledFormTable'
import Button from '@mui/material/Button';

export default function UploadTranscript() {
  const [rows, setRows] = useState([[0, 0, 0, 0]]);

  const selectors = [
    "A",
  ]

  const headers = [
    ["Course Code", "Course Name", "Grade", "Credits"]
  ];

  return (
    <div>
        <h1>Transcripts</h1>
        <div style={{display: "flex", justifyContent: "space-between",}}>
          <div>
            <h2>Select University</h2>
            <SelectLabels selector={selectors} label="Select"/>
          </div>
          <div>
            <h2>Select Semester</h2>
            <SelectLabels selector={selectors} label="Select"/>
          </div>
          <div style={{marginRight: 30}}>
            <h2>Select Student</h2>
            <SelectLabels selector={selectors} label="Select"/>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <StyledFormTable headers={headers} rows={rows}/>
        </div>
        <div style={{display: "block"}}>
          <div style={{marginTop: 30, display: "flex", justifyContent: "right"}}>
              <Button onClick={() => setRows([
                ...rows, [0, 0, 0, 0]
              ])} variant="contained">Add New Course</Button>
          </div>
          <div style={{marginTop: 10, display: "flex", justifyContent: "right"}}>
            <Button variant="contained">Submit</Button>
          </div> 
        </div>
    </div>
  )
}
