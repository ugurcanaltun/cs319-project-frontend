import React from 'react'
import SelectLabels from '../../components/SelectLabels'
import StyledTable from '../../components/StyledTable'
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react'
import { useGetDataFromExcelMutation } from '../../redux/api/apiSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const headers = [
  ["File", "File Format", "Status", "Download"]
];

const rows = [
  ["Score Table", ".xls", <DoneIcon />, <DownloadIcon />],
]

const selector = [
  "CS",
  "EEE",
  "ME",
  "IE",
]

const width = 800;

export default function UploadScoreTable() {
  const [uploadExcel] = useGetDataFromExcelMutation()
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState("Upload")
  const [text, setText] = React.useState('')

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onFileChange = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    setFileName(event.target.files[0].name)
  }

  const handleSubmitButton = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("file", file, fileName)
    formData.append("PlacementManagerDao", new Blob([JSON.stringify(  {
      "academicYear": "2022-2023",
      "applicationType": "ERASMUS",
      "departmentName": "CS",  
    })], {type:"application/json"}))
    uploadExcel(formData)
  }

  return (
    <div>
      <h1>Score Table</h1>
      <FormControl sx={{ m: 1, width: 240, height: 50 }} size="small">
      <InputLabel id="demo-select-small">Department</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={text}
        label="Department"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {selector.map((row, index) =>
          <MenuItem value={index} key={index}>{row}</MenuItem>
        )}
      </Select>
    </FormControl>
      <h2>Upload Here</h2>
      <div style={{ display: "flex" }}>
        {file ?
        <Button sx={{ display: 'flex',  marginLeft: 1, backgroundColor: "#008000" }} edge="start" endIcon={<UploadIcon />} variant="contained" component="label">
            {fileName}
            <input onChange={onFileChange} hidden name="file1" accept=".xls, .xlsx" multiple type="file" />
        </Button>
        :
        <Button sx={{ display: 'flex',  marginLeft: 1, backgroundColor: "#201F2B" }} edge="start" endIcon={<UploadIcon />} variant="contained" component="label">
            {fileName}
            <input onChange={onFileChange} hidden name="file1" accept=".xls, .xlsx" multiple type="file" />
        </Button>
        }  
        <Button onClick={handleSubmitButton} sx={{ display: 'flex', width: 120, marginLeft: 1, backgroundColor: "#201F2B" }} variant="contained">
          Submit
        </Button>
      </div>
      <StyledTable width={width} headers={headers} rows={rows} />
    </div >
  )
}
