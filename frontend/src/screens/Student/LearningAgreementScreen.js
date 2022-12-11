import * as React from 'react';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LearningAgreementScreen() {
    const handleUploadButton = () => {
        console.log("uploadButtonClicked")
    }

    const handleDownloadButton = () => {
        console.log("downloadButtonClicked")
    }

    return (
        <>
        <h1>Student Learning Agreement</h1>
        <h2>Before the Mobility</h2>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    Provide <strong>mobility programme</strong>
                </Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    Identify <strong>responsible persons</strong> 
                </Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    <strong>Commitment</strong> of the three parties with original / scanned/ digital signatures.
                </Typography>
            </Grid>
        </Grid>
        <h2>During the Mobility</h2>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                    If modifications <strong>are needed</strong>
                </Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                A party requests changes in the first <strong>2 to 5-week</strong> period after the start of regular classes/ educational components 
                (after the start of each semester) <i>N.B.: Request for extension of the duration to be made up to one month before the 
                foreseen end date</i>. 
                </Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                Agreement by email by the three parties within a <strong>2-week period</strong> after the request. 
                <i>N.B.: Changes to be agreed within 4 to 7 weeks after the start date of the studies</i>.
                </Typography>
            </Grid>
        </Grid>
        <h2>After the Mobility</h2>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                Receiving institution provides <strong>Transcript of Records</strong> to student and sending institution in period stipulated 
                in IIA (normally <strong>max. 5 weeks</strong> after results). 
                </Typography>
            </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap">
            <Grid item>
                <CircleIcon/>
            </Grid>
            <Grid item>
                <Typography variant="body1" gutterBottom>
                Sending institution provides the <strong>Transcript of Records</strong> to the student within <strong>5 weeks</strong>.
                </Typography>
            </Grid>
        </Grid>
        <Box sx={{ m: 3 }}/>
        <Grid container direction="row" alignItems="center" spacing={2} wrap="nowrap" justifyContent="center">
            <Grid item>
                <Button variant="contained" onClick={handleUploadButton}>Upload</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={handleDownloadButton}>Download</Button>
            </Grid>
        </Grid>
        </>
    )
}