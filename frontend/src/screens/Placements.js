import React from 'react'
import StyledTable from '../components/StyledTable'

const headers = [
    ["#",
    "First Name",
    "Last Name",
    "Student ID",
    "Total Point",
    "Duration Preferred",
    "Preferred University #1",
    "Preferred University #2",
    "Preferred University #3",
    "Preferred University #4",
    "Preferred University #5",]
]

const placementsRows = [
    ["a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",]
]

const binRows = [
    ["a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",
    "a",]
]

const width = 1200;

export default function Placements() {
  return (
    <div>
        <h1>Placements</h1>
        <StyledTable headers={headers} width={width} rows={placementsRows}/>
        <h1>Waiting Bin</h1>
        <StyledTable headers={headers} width={width} rows={binRows}/>
    </div>
  )
}
