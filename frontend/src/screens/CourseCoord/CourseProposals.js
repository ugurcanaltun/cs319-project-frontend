import React from 'react'
import StyledTable from '../../components/StyledTable'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import ScrollDialog from '../../components/ScrollDialog';

const headers = [
    ["Student Name", "Bilkent Course Code", "Host Course Code", "Syllabus", "Intent", "Operations"],
]

const intent = "i wanna see some ass"

const rows = [
    ["Uğur Can Altun", "CS319", "CMPE3131", <DownloadButton/>, <ScrollDialog intent={intent}/>, <OperationSection/>],
]

function DownloadButton() {
    const onClick = () => {

    }
    return (
        <Button onClick={onClick}>
            <DownloadIcon sx={{color: "#000"}}/>
        </Button>
    )
    
}

function OperationSection() {

    const handleCheckButton = () => {

    } 


    const handleCancelButton = () => {

    }

    return(
        <Grid container>
            <Grid item>
                <Button onClick={handleCheckButton}>
                    <CheckCircleIcon sx={{color: "#000"}}/>
                </Button>
            </Grid>
            <Grid item>
                <Button onClick={handleCancelButton}>
                    <CancelIcon sx={{color: "#000"}}/>
                </Button>
            </Grid>
        </Grid>        
    );
}

const width = 800

export default function CourseProposals() {
  return (
    <div>
        <h1>Course Proposals</h1>
        <StyledTable width={width} headers={headers} rows={rows}/>
    </div>
  )
}
