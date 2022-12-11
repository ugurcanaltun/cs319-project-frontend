import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StyledTable from "../../components/StyledTable";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import DoneIcon from '@mui/icons-material/Done';

export default function CourseTransfer() {
    const statusHeader = [["Host University", "Status", "Details"]];
    const statusRows = [["AGH University", <DoneIcon/>, <Button variant="contained">Details</Button>]];
    const transcriptHeader = [["Host University", "Status", "File"]];
    const transcriptRows = [["AGH University", "Not Downloaded", <DownloadIcon/>]]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box>
                <h1>Course Transfer</h1>
            </Box>
            <Box>
                <h2>Course Transfer Status</h2>
            </Box>
            <StyledTable headers={statusHeader} rows={statusRows}/>
            <Box>
                <h2>Transcript Status</h2>
            </Box>
            <StyledTable headers={transcriptHeader} rows={transcriptRows}/>
            <Grid container sx={{mt: 4}}>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2} >
                    <Button variant="contained">
                        Upload Transcript
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
} 