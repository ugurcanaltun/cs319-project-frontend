import * as React from 'react';
import StyledTable from '../components/StyledTable';

export default function ApplicationsScreen() {
    const headers = [
        ["#", "Semester", "Semester Startdate", "Semester Enddate", "Status", "Application Status", "Form Code", "Operations"]
    ];

    const rows = [
        ["1"]
    ];
    return (
        <>
        <h1>Applications</h1>
        <h2>Erasmus Program (KA103)</h2>
        <StyledTable headers={headers} rows={rows}/>
        </>
    )
}