import * as React from 'react'
import { useState, useEffect } from 'react'
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useGetAllWishesQuery, useAddWishMutation } from '../../redux/api/apiSlice'
import { useUploadFileMutation } from '../../redux/api/apiSlice';
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function WishListScreen() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetAllWishesQuery()
    const [openDialog, setOpenDialog] = useState(false)
    const [openIntentDialog, setOpenIntentDialog] = useState(false)
    const [intentDialogText, setIntentDialogText] = useState("")
    const [isPrevAccepted, setIsPrevAccepted] = useState(true)
    const [rows, setRows] = useState([])
    const [uploadFile] = useUploadFileMutation()
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState("Upload Syllabus")

    const onFileChange = (event) => {
        setFile(event.target.files[0])
        setFileName(event.target.files[0].name)
    }

    const handleUploadButton = (event) => {
        if(file){
            event.preventDefault()
            const formData = new FormData()
            formData.append("file", file)
            formData.append("fileName", file.name)
            formData.append("fileDownloadUri", `http://localhost:8080/downloadFile/${file.name}`)
            formData.append("fileType", file.type)
            formData.append("size", file.size)
            uploadFile(formData)
        }
    }

    const handleDownloadButton = () => {
        axios({
            url: `http://localhost:8080/downloadFile/${file.name}`, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
        
            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'learningAgreement.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
    } 

    const [addWish] = useAddWishMutation()


    useEffect(() => {
        if (isSuccess) {
            console.log(data)
            let aa = []
            for (let i = 0; i < data.length; i++) {
                let row = []
                row.push(data[i].courseToCountAsBilkentCourse.courseCode)
                row.push(data[i].courseToCountAsBilkentCourse.hostCourseName)
                row.push(data[i].courseToCountAsBilkentCourse.ects_credit)
                row.push(data[i].bilkentCourse.courseCode)
                row.push(data[i].bilkentCourse.nameOfCourse)
                row.push(data[i].bilkentCourse.ects_credit)
                row.push(data[i].bilkentCourse.courseType)
                row.push(<SyllabusButton />)
                row.push(<IntentButton intent={data[i].intent} />)
                if (data[i].courseToCountAsBilkentCourse.approved) {
                    row.push("Approved")
                }
                else { row.push("Not Approved") }
                aa.push(row)
            }
            setRows([...rows, ...aa])
        }
    }, [data, isSuccess])
    const [courseTypeLabel, setCourseTypeLabel] = useState("")
    const [bilkentCourseTransferred, setBilkentCourseTransferred] = useState("")
    const [courseCode, setCourseCode] = useState("")
    const [courseName, setCourseName] = useState("")
    const [ECTS, setECTS] = useState("")
    const [intent, setIntent] = useState("")

    const addNewCourseHeaders = [
        ["Course Code", "Course Name", "ECTS", "Intent"]
    ]
    const [wishListApproved, setWishListApproved] = useState(false)

    const handleCourseTypeLabel = (event) => {
        setCourseTypeLabel(event.target.value)
    }

    const handleBilkentCourseTransferred = (event) => {
        setBilkentCourseTransferred(event.target.value)
    }

    function SyllabusButton(props) {
        const onClick = () => {
            axios({
                url: `http://localhost:8080/downloadFile/${props.syllabusTitle}`, //your url
                method: 'GET',
                responseType: 'blob', // important
            }).then((response) => {
                // create file link in browser's memory
                const href = URL.createObjectURL(response.data);
            
                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', `${props.syllabusTitle}.pdf`); //or any other extension
                document.body.appendChild(link);
                link.click();
            
                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            });
        }
        return (
            <Button onClick={onClick}>
                <HistoryEduIcon sx={{ color: "#201F2B" }} />
            </Button>
        )
    }
    function IntentButton(props) {
        const onClick = () => {
            setIntentDialogText(props.intent)
            setOpenIntentDialog(true)
        }
        return (
            <Button onClick={onClick}>
                <ArticleIcon sx={{ color: "#201F2B" }} />
            </Button>
        )
    }
    const selectorsCourseType = ["Mandatory", "Arts Core Electives", "General Elective", "Technical Elective", "Additional"]
    const coursesData = [
        {
            courseCode: "CS 342",
            courseName: "Operating Systems",
            courseECTS: 6.5,
            courseType: "Mandatory",
        },
        {
            courseCode: "CS 353",
            courseName: "Operating Systems",
            courseECTS: 5,
            courseType: "Mandatory",
        },
        {
            courseCode: "EEE 391",
            courseName: "Basics of Signals and Systems",
            courseECTS: 5,
            courseType: "Mandatory",
        },
        {
            courseCode: "GE 301",
            courseName: "Science Technology and Society",
            courseECTS: 3.5,
            courseType: "Mandatory",
        },
        {
            courseCode: "ADA 265",
            courseName: "How Houses Build People",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "COMD 203",
            courseName: "Media Studies I",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "HART 117",
            courseName: "Ways of Seeing: Approaches to Art and Architectural History",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "FA 171",
            courseName: "Introduction to Art, Design and Culture I",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "MSC 110",
            courseName: "The Culture and Basics of Music Making",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "THR 110",
            courseName: "Introduction to Theatre",
            courseECTS: 5,
            courseType: "Arts Core Electives",
        },
        {
            courseCode: "CS 473",
            courseName: "Algorithms I",
            courseECTS: 3.5,
            courseType: "Mandatory",
        },
        {
            courseCode: "IE 400",
            courseName: "Principles of Engineering Management",
            courseECTS: 3.5,
            courseType: "Mandatory",
        },
        {
            courseCode: "LNG 111",
            courseName: "Spanish I",
            courseECTS: 5,
            courseType: "General Elective",
        },
        {
            courseCode: "CS 411",
            courseName: "Software Architecture Design",
            courseECTS: 5,
            courseType: "Technical Elective",
        },
        {
            courseCode: "CS 411",
            courseName: "Software Architecture Design",
            courseECTS: 5,
            courseType: "Technical Elective",
        },
        {
            courseCode: "CS 413",
            courseName: "Software Engineering Project Management",
            courseECTS: 5,
            courseType: "Technical Elective",
        },
        {
            courseCode: "CS 415",
            courseName: "Software Product Line Engineering",
            courseECTS: 5,
            courseType: "Technical Elective",
        },
    ]
    const headers = [
        ["Course Code ", "Course Name", "ECTS", "Course Code", "Course Name", "ECTS", "Course Type", "Syllabus", "Intent", "Status"]
    ]

    const handleCloseIntentDialog = () => {
        setOpenIntentDialog(false)
    }

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
    function HandleSubmitNewCourse(event) {
        event.preventDefault(event.currentTarget)
        // console.log(document.getElementById("aa"))
        // const formData = new FormData(document.getElementById("aa"))
        let row = [courseCode, courseName, ECTS, coursesData[bilkentCourseTransferred].courseCode,
            coursesData[bilkentCourseTransferred].courseName, coursesData[bilkentCourseTransferred].courseECTS,
            courseTypeLabel, <SyllabusButton syllabusTitle={fileName}/>, <IntentButton intent={intent} />, "Not Approved"]
        setRows([...rows, row])
        // const bilkentCourse = {
        //     bilkentCourse: {
        //         courseCode: row[3],
        //         courseType: row[6],
        //         ects_credit: row[5],
        //     }
        // }
        // const courseToCountAsBilkentCourse = {
        //     courseToCountAsBilkentCourse: {
        //         approved: true,
        //         courseCode: row[0],
        //         ects_credit: row[2],
        //         nameOfCourse: row[1],
        //     }
        // }
        // const wish = {
        //     wish: {
        //         standing: "",
        //         syllabus: "",
        //         intent: "",
        //     }
        // }
        // formData.append("bilkentCourse", bilkentCourse)
        // formData.append("courseToCountAsBilkentCourse", courseToCountAsBilkentCourse)
        // formData.append("wish", wish)
        // console.log(formData)
        const obj = {
            bilkentCourseCode: row[3],
            bilkentCourseType: row[6],
            bilkentEcts_credit: row[5],
            approved: true,
            hostCourseCode: row[0],
            hostEcts_credit: row[2],
            hostNameOfCourse: row[1],
            standing: "",
            syllabus: "",
            intent: ""
        }
        console.log(obj)
        addWish(obj)
        setOpenDialog(false)
    }

    function SelectButton(props) {
        const index = props.rowIndex
        const onClick = () => {
            let row = [prevAcceptedRows[index][0], prevAcceptedRows[index][1],
            prevAcceptedRows[index][2], coursesData[bilkentCourseTransferred].courseCode,
            coursesData[bilkentCourseTransferred].courseName, coursesData[bilkentCourseTransferred].courseECTS, courseTypeLabel,
            <SyllabusButton />, <IntentButton intent={intent} />, "Not Approved"]
            setRows([...rows, row])
            setOpenDialog(false)
            const obj = {
                bilkentCourse: {
                    courseCode: row[3],
                    courseType: row[6],
                    ects_credit: row[5],
                },
                courseToCountAsBilkentCourse: {
                    approved: true,
                    courseCode: row[0],
                    ects_credit: row[2],
                    nameOfCourse: row[1],
                },
                wish: {
                    standing: "",
                    syllabus: "",
                    intent: "",
                }
            }
            console.log(obj)
            addWish(obj)
        }
        return (
            <Button onClick={onClick}>
                <AddIcon sx={{ color: "#201F2B" }} />
            </Button>
        )
    }
    const prevAcceptedHeaders = [
        ["Course Code", "Course Name", "ECTS", "Select"]
    ]
    const prevAcceptedRows = [
        ["EEE391", "Signals", 5, <SelectButton rowIndex={0} />],
        ["EEE381", "Signals", 5, <SelectButton rowIndex={1} />],
        ["EEE391", "Signals", 5, <SelectButton rowIndex={2} />],
    ]

    let submitButton;
    if (wishListApproved) submitButton = <Button sx={{ backgroundColor: "#201F2B", marginLeft: 20 }} variant="contained">Submit</Button>
    else submitButton = <Button disabled sx={{ backgroundColor: "#201F2B", marginLeft: 20 }} variant="contained">Submit</Button>

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
                    <Grid item><Button sx={{ backgroundColor: "#201F2B", marginLeft: 10 }} variant="contained" onClick={handleAddNewCourse}>Add New Course</Button></Grid>
                    <Grid item>{submitButton}</Grid>
                </Grid>
            </Grid>
            <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true} maxWidth={"xl"}>
                <DialogTitle>
                    <strong>Add New Course</strong>
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
                            <FormControl sx={{ m: 1, width: 240, height: 50 }} size="small">
                                <InputLabel id="demo-select-small">Course Type</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={courseTypeLabel}
                                    label="Course Type"
                                    onChange={handleCourseTypeLabel}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {selectorsCourseType.map((row, index) =>
                                        <MenuItem value={row} key={index}>{row}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ ml: 3, mt: 1 }} variant="body1" gutterBottom>
                                <strong>Bilkent Course Transferred</strong>
                            </Typography>
                            <FormControl sx={{ m: 1, width: 240, height: 50 }} size="small">
                                <InputLabel id="demo-select-small">Bilkent Course Transferred</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    vawlue={bilkentCourseTransferred}
                                    label="Bilkent Course Transferred"
                                    onChange={handleBilkentCourseTransferred}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {coursesData.filter(obj =>
                                        (obj.courseType === courseTypeLabel || courseTypeLabel === "Additional")).map(obj => obj.courseCode).map((row, index) =>
                                            <MenuItem value={index} key={index}>{row}</MenuItem>
                                        )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {isPrevAccepted
                        ?
                        <Box sx={{ flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <h2>Host University Course Transferred</h2>
                            </Box>
                            <Grid container>
                                <Grid xs={12} item>
                                    <StyledTable headers={prevAcceptedHeaders} rows={prevAcceptedRows} />
                                </Grid>
                            </Grid>
                        </Box>
                        :
                        <>
                        <Box sx={{ ml: 18 }}>
                        <TableContainer sx={{ width: 801, marginTop: 5, marginLeft: 1, }} component={Paper}>
                        <Table aria-label="customized table">
                        <TableHead>
                        <TableRow sx={{ width: 200 }}>
                            {addNewCourseHeaders.map((rows) =>
                                rows.map((row, index) =>
                                    <StyledTableCell key={index} sx={{ width: 200 }} align="left">{row}</StyledTableCell>
                                )
                            )}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow sx={{ display: "flex", width: 200 }}>
                                <td style={{ display: "flex", width: 200 }}>
                                    <div style={{ width: 200 }}>
                                        <TextField
                                            value={courseCode}
                                            sx={{ width: 200 }}
                                            id="standard-basic"
                                            label="Enter"
                                            variant="standard"
                                            onChange={(event) => { setCourseCode(event.target.value) }} />
                                    </div>
                                </td>
                                <td style={{ display: "flex", width: 200 }}>
                                    <div style={{ width: 200 }}>
                                        <TextField
                                            value={courseName}
                                            sx={{ width: 200 }}
                                            id="standard-basic"
                                            label="Enter"
                                            variant="standard"
                                            onChange={(event) => { setCourseName(event.target.value) }} />
                                    </div>
                                </td>
                                <td style={{ display: "flex", width: 200 }}>
                                    <div style={{ width: 200 }}>
                                        <TextField
                                            value={ECTS}
                                            sx={{ width: 200 }}
                                            id="standard-basic"
                                            label="Enter"
                                            variant="standard"
                                            onChange={(event) => { setECTS(event.target.value) }} />
                                    </div>
                                </td>
                                <td style={{ display: "flex", width: 200 }}>
                                    <div style={{ width: 200 }}>
                                        <TextField
                                            value={intent}
                                            sx={{ width: 200 }}
                                            id="standard-basic"
                                            label="Enter"
                                            variant="standard"
                                            onChange={(event) => { setIntent(event.target.value) }} />
                                    </div>
                                </td>
                            </TableRow>
                            </TableBody>
                            </Table>
                            </TableContainer>
                            </Box>
                            <Grid container sx={{ mt: 6 }} spacing={2}>
                            <Grid item >
                            {file ?
                            <Button sx={{ display: 'flex',  marginLeft: 1, backgroundColor: "#008000" }} edge="start" endIcon={<UploadIcon />} variant="contained" component="label">
                                {fileName}
                                <input onChange={onFileChange} hidden name="file1" accept="application/pdf" multiple type="file" />
                            </Button>
                            :
                            <Button sx={{ display: 'flex',  marginLeft: 1, backgroundColor: "#201F2B" }} edge="start" endIcon={<UploadIcon />} variant="contained" component="label">
                                {fileName}
                                <input onChange={onFileChange} hidden name="file1" accept="application/pdf" multiple type="file" />
                            </Button>
                            }           
                            </Grid>
                            <Grid item>
                            <Button onClick={handleDownloadButton} sx={{ display: 'flex', marginLeft: 1, backgroundColor: "#201F2B" }} edge="start" variant="contained" component="label">
                                <DownloadIcon/>
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button onClick={handleUploadButton} sx={{ display: 'flex', width: 120, marginLeft: 1, backgroundColor: "#201F2B" }} edge="start" variant="contained" component="label">
                                Submit
                            </Button>
                            </Grid>
                            <Grid item sx={{ml: 64}}>
                            <form id="aa">
                            <Button
                            sx={{ backgroundColor: "#201F2B" }}
                            variant="contained"
                            onClick={HandleSubmitNewCourse}
                            id="new-course-button">Submit New Course
                            </Button>
                            </form>
                            </Grid>
                            </Grid>
                        </>
                    }
                </DialogContent>
            </Dialog>
            <Dialog open={openIntentDialog} onClose={handleCloseIntentDialog}>
                <DialogTitle>Intent</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        {intentDialogText}
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    )
}