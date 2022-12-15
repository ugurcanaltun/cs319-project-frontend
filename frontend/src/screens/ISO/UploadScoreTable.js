import React from 'react'
import SelectLabels from '../../components/SelectLabels'
import StyledTable from '../../components/StyledTable'
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import DoneIcon from '@mui/icons-material/Done';

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
  return (
    <div>
      <h1>Score Table</h1>
      <SelectLabels selector={selector} label="Department" edge="start" />
      <h2>Upload Here</h2>
      <div style={{ display: "flex" }}>
        <Button sx={{ display: 'flex', width: 120, marginLeft: 1, backgroundColor: "#201F2B" }} edge="start" endIcon={<UploadIcon />} variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Button sx={{ display: 'flex', width: 120, marginLeft: 1, backgroundColor: "#201F2B" }} variant="contained">
          Submit
        </Button>
      </div>
      <StyledTable width={width} headers={headers} rows={rows} />
    </div >
  )
}
