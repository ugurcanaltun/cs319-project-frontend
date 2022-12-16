import React, { useState } from 'react'
import SelectLabels from '../../components/SelectLabels'
import Button from '@mui/material/Button';
import StyledTable from '../../components/StyledTable';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export default function UploadTranscript() {
  const [openDialog, setOpenDialog] = useState(false)
  const [rows, setRows] = useState([])

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleAddCourse = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let row = []
    row.push(formData.get("courseCode"))
    row.push(formData.get("courseName"))
    row.push(formData.get("grade"))
    row.push(formData.get("credits"))
    setRows([...rows, row])
    setOpenDialog(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const courses = []
    for (let i = 0; i < rows.length; i++) {
      courses.push(
        {
          courseCode: rows[i][0],
          courseName: rows[i][1],
          grade: rows[i][2],
          credits: rows[i][3]
        }
      )
    }
    const transcriptNew = {
      university: formData.get("university"),
      semester: formData.get("semester"),
      student: formData.get("student"),
      transcript: courses
    }
    console.log(transcriptNew)
  }

  const selectors = [
    "A",
  ]

  const headers = [
    ["Course Code", "Course Name", "Grade", "Credits"]
  ];

  return (
    <div>
      <h1>Transcripts</h1>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <div style={{ display: "flex", justifyContent: "space-between", }}>
          <div>
            <h2>Select University</h2>
            <SelectLabels id="university" selector={selectors} label="Select" />
          </div>
          <div>
            <h2>Select Semester</h2>
            <SelectLabels id="semester" selector={selectors} label="Select" />
          </div>
          <div style={{ marginRight: 30 }}>
            <h2>Select Student</h2>
            <SelectLabels id="student" selector={selectors} label="Select" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <StyledTable headers={headers} rows={rows} width={801} />
        </div>
        <div style={{ display: "block" }}>
          <div style={{ marginTop: 30, display: "flex", justifyContent: "right" }}>
            <Button sx={{ backgroundColor: "#201F2B" }} onClick={() => setOpenDialog(true)} variant="contained">Add New Course</Button>
          </div>
          <div style={{ marginTop: 10, display: "flex", justifyContent: "right" }}>
            <Button sx={{ backgroundColor: "#201F2B" }} variant="contained" type="submit">Submit</Button>
          </div>
        </div>
      </Box>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle >Add New Course</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleAddCourse} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="courseCode"
              label="Course Code"
              name="courseCode"
              autoComplete="courseCode"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="courseName"
              label="Course Name"
              id="courseName"
              autoComplete="course-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="grade"
              label="Grade"
              id="grade"
              autoComplete="grade"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="credits"
              label="Credits"
              id="credits"
              autoComplete="credits"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#201F2B", mt: 3, mb: 2 }}
            >
              Add Course
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
