import * as React from 'react'
import Grid from '@mui/material/Grid'
import StyledTable from "./StyledTable"
import DownloadIcon from '@mui/icons-material/Download'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import Button from '@mui/material/Button';

export default function TransferrableCoursesPrevAccepted() {
    const headersBilkent = [
        ["Bilkent Course Code", "Bilkent Course Name", "ECTS", "Course Type"]
    ]
    const rowsBilkent = [
        ["CS319", "Object Oriented Software Engineering", 5, "Mandatory"]
    ]
    const headersHost = [
        ["Course Code", "Course Name", "ECTS", "Syllabus", "Remove"]
    ]
    const rowsHost = [
        ["CMPE3131", "OOP", 5, <DownloadButton/>, <RemoveButton/>]
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
    function RemoveButton() {
        const onClick = () => {
        }
        return (
            <Button onClick={onClick}>
                <RemoveCircleIcon sx={{color: "#000"}}/>
            </Button>
        )
    }
    return (
        <Grid container columnSpacing={{ xs: 1}}>
            <Grid item xs={6}>
                <StyledTable headers={headersBilkent} rows={rowsBilkent}/>
            </Grid>
            <Grid item xs={6}>
                <StyledTable headers={headersHost} rows={rowsHost}/>
            </Grid>
        </Grid>
    )
}