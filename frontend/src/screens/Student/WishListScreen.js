import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import StyledTable from "../../components/StyledTable"
import ArticleIcon from '@mui/icons-material/Article'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import Divider from '@mui/material/Divider'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FilledCircleIcon from '@mui/icons-material/Circle'
import OutlinedCircleIcon from '@mui/icons-material/CircleOutlined'
import SelectLabels from '../../components/SelectLabels'
import WishListAddNewCourses from '../../components/WishListAddNewCourse'
import WishListAddPrevAccepted from '../../components/WishListAddPrevAccepted'

export default function WishListScreen() {
    const [openDialog, setOpenDialog] = useState(false)
    const [isPrevAccepted, setIsPrevAccepted] = useState(true)
    function SyllabusButton() {
        const onClick = () => {

        }
        return (
            <Button onClick={onClick}>
                <HistoryEduIcon sx={{ color: "#201F2B" }} />
            </Button>
        )
    }
    function IntentButton() {
        const onClick = () => {

        }
        return (
            <Button onClick={onClick}>
                <ArticleIcon sx={{ color: "#201F2B" }} />
            </Button>
        )
    }
    const selectorsCourseType = ["Mandatory", "Elective"]
    const selectorsCourses = ["EEE391", "ENG401", "CS319"]
    const headers = [
        ["Course Code", "Course Name", "ECTS", "Course Code", "Course Name", "ECTS", "Course Type", "Syllabus", "Intent", "Status"]
    ]
    const rows = [
        ["CMPE3131", "Learning 31", 5, "CS202", "Leetcode fln", 5, "Mandatory", <SyllabusButton />, <IntentButton />, "N/A"],
        ["SEXED69", "Learning Seks", 4, "ENG102", "Kizlarla Takilmaca", 4, "Mandatory", <SyllabusButton />, <IntentButton />, "N/A"],
        ["YAR520", "YaradaniSev", 4, "HUM111", "Gilgamis Enkidu Gay Seks", 4, "Mandatory", <SyllabusButton />, <IntentButton />, "N/A"],
        ["ENG420", "Kari Avlama Sanati", 7, "ENG401", ":D", 7, "Mandatory", <SyllabusButton />, <IntentButton />, "N/A"]
    ]
    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
    const handleAddNewCourse = () => {
        setOpenDialog(true)
    }

    const handleClickPreviouslyAccepted = () => {
        setIsPrevAccepted(true)
    }

    const handleClickNewCourses = () => {
        setIsPrevAccepted(false)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
                <h1>Wish List</h1>
            </Box>
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ ml: 14 }}>
                        <strong>Host University</strong>
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ ml: 14 }}>
                        <strong>Bilkent University</strong>
                    </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
                <Grid item xs={4}>
                    <Typography variant="h6" gutterBottom sx={{ ml: 14 }}>
                        <strong>Course Status</strong>
                    </Typography>
                </Grid>
            </Grid>
            <StyledTable rows={rows} headers={headers} />
            <Grid container sx={{ mt: 5 }}>
                <Grid item xs={5}></Grid>
                <Grid item xs={5}></Grid>
                <Grid item xs={2} container direction="column" spacing={2}>
                    <Grid item><Button sx={{ backgroundColor: "#201F2B" }} variant="contained" onClick={handleAddNewCourse}>Add New Course</Button></Grid>
                    <Grid item><Button sx={{ backgroundColor: "#201F2B" }} variant="contained">Submit</Button></Grid>
                </Grid>
            </Grid>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true} maxWidth={"xl"}>
                <DialogTitle>
                    <Typography sx={{ color: "#201F2B" }} variant="h3" gutterBottom align="center">
                        <strong>Add New Course</strong>
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={4}>
                            <Button onClick={handleClickPreviouslyAccepted}>
                                {isPrevAccepted
                                    ? <FilledCircleIcon sx={{ color: "#201F2B" }} /> :
                                    <OutlinedCircleIcon sx={{ color: "#201F2B" }} />}
                                <Typography sx={{ color: "#201F2B", ml: 1, mt: 1 }} variant="body1" gutterBottom>
                                    <strong>Previously Accepted</strong>
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={handleClickNewCourses}>
                                {!isPrevAccepted
                                    ? <FilledCircleIcon sx={{ color: "#201F2B" }} /> :
                                    <OutlinedCircleIcon sx={{ color: "#201F2B" }} />}
                                <Typography sx={{ color: "#201F2B", ml: 1, mt: 1 }} variant="body1" gutterBottom>
                                    <strong>New Course</strong>
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography sx={{ ml: 8, mt: 1 }} variant="body1" gutterBottom>
                                <strong>Course Type</strong>
                            </Typography>
                            <SelectLabels selector={selectorsCourseType} label="Select Course Type" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ ml: 3, mt: 1 }} variant="body1" gutterBottom>
                                <strong>Bilkent Course Transferred</strong>
                            </Typography>
                            <SelectLabels selector={selectorsCourses} label="Select Bilkent Course Transferred" />
                        </Grid>
                    </Grid>
                    {isPrevAccepted
                        ? <WishListAddPrevAccepted /> :
                        <WishListAddNewCourses />}
                </DialogContent>
            </Dialog>
        </Box>
    )
}