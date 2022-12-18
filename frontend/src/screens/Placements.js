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
    ["1",
    "Ugur Can",
    "Altun",
    "22002701",
    "90",
    "2022-2023 Spring",
    "EPFL",
    "Vrije",
    "AGH",
    "Kingston",
    "Saarland"]
]

const binRows = [
  ["1",
  "Samet",
  "Aybaba",
  "22002562",
  "40",
  "2022-2023 Spring",
  "EPFL",
  "Vrije",
  "AGH",
  "Kingston",
  "Saarland"]
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
