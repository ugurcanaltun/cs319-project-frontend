import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StyledTable from "../../components/StyledTable";
import Button from '@mui/material/Button';
import { useGetUserQuery, useGetAllWishesQuery, useGetApplicationQuery } from '../../redux/api/apiSlice';
import { useState, useEffect } from 'react'
import DownloadIcon from '@mui/icons-material/Download';

export default function PreApprovalStudent() {
    const { data: userData, isSuccess: isSuccessUser } = useGetUserQuery()
    const { data: wishesData, isSuccess: isSuccessWishes } = useGetAllWishesQuery()
    console.log(wishesData)
    const { data: applicationData, isSuccess: isSuccessApplication } = useGetApplicationQuery()
    const headersEmpty = [];
    const rowsEmpty = [];
    const [rowsName, setRowsName] = useState([["Name", " ", "ID Number", " "], ["Surname", " ", "Department", " "]])
    const [rowNameOfInstitution, setRowNameOfInstitution] = useState([["Name of the institution", " "]])
    const [rowAcademicYear, setRowAcademicYear] = useState([["Academic Year", " "], ["Semester", " "]])
    const [infoHeader, setInfoHeader] = useState([["Host institution courses to be transferred upon approval",
        "Course or requirement to be exempted if transferred course is completed with a passing grade †"]])
    const [headersCourseTransfer, setHeadersCourseTransfer] = useState([[" ", " Course Code", "Course Name", "Credits",
        "Course Code and Name for a Required Course, Elective Group Name for an Elective Requirement",
        "Credits", "Elective Requirement Exemptions only: Course code(s) of directly equivalent course(s), if any **"]])
    const [rowsCourseTransfer, setRowsCourseTransfer] = useState([])
    const [headerSignatures, setHeaderSignatures] = useState([["Approved by", "Name", "Signture", "Date"]])
    const [rowsSignatures, setRowsSignatures] = useState([[" ", " ", " ", " "]])
    const [isPreApp, setIsPreApp] = useState(false)

    const onClickDownload = () => {

    }

    useEffect(() => {
        console.log(applicationData)
        if (isSuccessUser && isSuccessWishes && isSuccessApplication) {
            setRowsName([["Name", userData.firstName, "ID Number", userData.schoolId], ["Surname", userData.lastName, "Department", userData.department]])
            setRowNameOfInstitution([["Name of the institution", applicationData.nameOfPlacedHostUniversity]])
            setRowAcademicYear([["Academic Year", userData.academicYear], ["Semester", applicationData.appliedAcademicSemester]])
            let aa = []
            for (let i = 0; i < wishesData.wishes.length; i++) {
                let row = []
                row.push(i + 1)
                row.push(wishesData.wishes[i].courseToCountAsBilkentCourse.courseCode)
                row.push(wishesData.wishes[i].courseToCountAsBilkentCourse.nameOfCourse)
                row.push(wishesData.wishes[i].courseToCountAsBilkentCourse.ects_credit)
                row.push(wishesData.wishes[i].bilkentCourse.courseType)
                row.push(wishesData.wishes[i].bilkentCourse.ects_credit)
                row.push(wishesData.wishes[i].bilkentCourse.courseCode)
                aa.push(row)
            }
            setRowsCourseTransfer([...rowsCourseTransfer, ...aa])
        }
    }, [userData, wishesData, applicationData])

    let submitButton;
    if (isPreApp) submitButton = <Button sx={{ backgroundColor: "#201F2B", marginLeft: 20 }} variant="contained">Submit</Button>
    else submitButton = <Button disabled sx={{ backgroundColor: "#201F2B", marginLeft: 20 }} variant="contained">Submit</Button>
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <Box sx={{ flexGrow: 1, mb: -4 }}>
                <h1>Pre Approval</h1>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <StyledTable headers={headersEmpty} rows={rowsName} />
                </Grid>
                <Grid item xs={6}>
                    <StyledTable headers={headersEmpty} rows={rowNameOfInstitution} />
                </Grid>
                <Grid item xs={6}>
                    <StyledTable headers={headersEmpty} rows={rowAcademicYear} />
                </Grid>
                <Box sx={{ flexGrow: 1, mb: -4 }}>
                    <Grid item xs={12}>
                        <StyledTable headers={infoHeader} rows={rowsEmpty} />
                    </Grid>
                </Box>
                <Grid item xs={12}>
                    <StyledTable headers={headersCourseTransfer} rows={rowsCourseTransfer} />
                </Grid>
                <Grid item xs={12}>
                    <StyledTable headers={headerSignatures} rows={rowsSignatures} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', mt: 4, justifyContent: 'flex-end' }}>
                <Button onClick={onClickDownload} sx={{ display: 'flex', marginLeft: 1, backgroundColor: "#008000" }} edge="start" endIcon={<DownloadIcon />} variant="contained" component="label">
                    Download
                </Button>
                {submitButton}
            </Box>
        </Box>
    )
}