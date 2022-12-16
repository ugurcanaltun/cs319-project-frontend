import * as React from 'react';
import StyledTable from '../components/StyledTable';
import Button from '@mui/material/Button';

export default function ApplicationsScreen() {
    const headers = [
        ["#", "Host University", "Semester", "Semester Start Date", "Semester End Date", "Status", "Application Status", "Form Code", "Operations"]
    ];

    const rows = [
        ["1"]
    ];

    const width = 1200;

    return (
        <>
            <h1>Applications</h1>
            <h2>Erasmus Program (KA103)</h2>
            <StyledTable width={width} headers={headers} rows={rows} />

            <Button sx={{ backgroundColor: "#035206", marginTop: 3, marginRight: 2 }} align="right" variant="contained">Accept Invitation</Button>
            <Button sx={{ backgroundColor: "#751C08", marginTop: 3 }} align="right" variant="contained">Cancel Application</Button>
        </>
    )
}