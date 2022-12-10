import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StyledTable from "../components/StyledTable";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AvTimerIcon from '@mui/icons-material/AvTimer';

function OperationSection() {

    const handleCheckButton = () => {

    } 

    const handlePendingButton = () => {

    }

    const handleCancelButton = () => {

    }

    return(
        <Grid container>
            <Grid item>
                <Button onClick={handleCheckButton}>
                    <CheckCircleIcon/>
                </Button>
            </Grid>
            <Grid item>
                <Button onClick={handlePendingButton}>
                    <AvTimerIcon/>
                </Button>
            </Grid>
            <Grid item>
                <Button onClick={handleCancelButton}>
                    <CancelIcon/>
                </Button>
            </Grid>
        </Grid>        
    );
}

export default function ToDoListScreen() {
    const headers = [
        ["Work", "Deadline", "Status", "Operations"]
    ];

    const rows = [
        ["Kaan Berk Kabadayi's Course Proposal", "N/A", "Not Completed", <OperationSection/>],
        ["Ugur Can Altun's Preapproval", "N/A", "Not Completed", <OperationSection/>]
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>To Do List</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 18}}>
                <Grid item xs={12}>
                    <StyledTable headers={headers} rows={rows}/>
                </Grid>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Add Todo</Button>
                </Grid>
            </Grid>
        </Box>
    )
}