import * as React from 'react';
import StyledTable from '../components/StyledTable';
import Button from '@mui/material/Button';

export default function ApplicationsScreen() {
    const appHeaders = [
        ["#", "Host University", "Semester", "Semester Start Date", "Semester End Date",
            "Status", "Application Status", "Form Code", "Operations"]
    ];

    const invHeaders = [
        ["#", "Host University", "Semester", "Semester Start Date", "Semester End Date",]
    ];

    const appRows = [
        ["1"]
    ];

    const invRows = [
        ["1"]
    ];

    // API
    const hasApplication = true;

    const width = 1200;

    function ApplicationComp() {
        return (
            <div>
                <h2>Erasmus Program (KA103)</h2>
                <StyledTable width={width} headers={appHeaders} rows={appRows} />
                <Button sx={{ backgroundColor: "#751C08", marginTop: 3, marginLeft: 127 }} align="right" variant="contained">Cancel Application</Button>
            </div>
        )
    }

    function InvitationPage() {
        return (
            <div>
                <h2>Erasmus Program (KA103) Invitation</h2>
                <StyledTable width={width} headers={invHeaders} rows={invRows} />
                <Button sx={{ backgroundColor: "#035206", marginTop: 3, marginLeft: 107 }} align="right" variant="contained">Accept Invitation</Button>
                <Button sx={{ backgroundColor: "#751C08", marginTop: 3, marginLeft: 1 }} align="right" variant="contained">Reject Invitation</Button>
            </div>
        )
    }

    return (
        hasApplication ? <ApplicationComp /> : <InvitationPage />
    )
}