import * as React from 'react';
import StyledTable from '../components/StyledTable';
import Button from '@mui/material/Button';
import { useGetApplicationQuery, useGetUserQuery } from '../redux/api/apiSlice';

export default function ApplicationsScreen() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetApplicationQuery()

    let hasApplication = false
    const invHeaders = [
        ["#", "Host University", "Semester", "Semester Start Date", "Semester End Date"]
    ];

    const appHeaders = [
        ["#", "Host University", "Semester", "Semester Start Date", "Semester End Date",
            "Application Status"]
    ];

    let appRows = [
        ["1", "vrij", "spring", "january", "june", "-"]
    ];

    let invRows = [
        ["1", "vrij", "spring", "january", "june"]
    ];
    let headers = []
    let rows = []

    if (isSuccess) {
        if (data.placed) {
            headers = appHeaders
            rows = appRows;
            hasApplication = true
        }
        else {
            headers = invHeaders
            rows = invRows;
            hasApplication = false
        }
        console.log(data);
    }


    // API

    const width = 1200;

    function ApplicationComp() {

        return (
            <div>
                <h2>Erasmus Program (KA103)</h2>
                <StyledTable width={width} headers={headers} rows={rows} />
                <Button sx={{ backgroundColor: "#751C08", marginTop: 3, marginLeft: 127 }} align="right" variant="contained">Cancel Application</Button>
            </div>
        )
    }

    function InvitationPage() {
        return (
            <div>
                <h2>Erasmus Program (KA103) Invitation</h2>
                <StyledTable width={width} headers={headers} rows={rows} />
                <Button sx={{ backgroundColor: "#035206", marginTop: 3, marginLeft: 107 }} align="right" variant="contained">Accept Invitation</Button>
                <Button sx={{ backgroundColor: "#751C08", marginTop: 3, marginLeft: 1 }} align="right" variant="contained">Reject Invitation</Button>
            </div>
        )
    }

    return (
        hasApplication ? <ApplicationComp /> : <InvitationPage />
    )
}