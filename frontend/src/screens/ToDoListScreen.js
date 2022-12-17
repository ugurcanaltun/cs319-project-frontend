import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StyledTable from "../components/StyledTable";
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import {
    useGetTasksQuery,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} from '../redux/api/apiSlice';


function OperationSection(props) {
    const [updateTask] = useUpdateTaskMutation()
    const [deleteTask] = useDeleteTaskMutation()

    const handleCheckButton = () => {
        console.log(props.id)
        updateTask({
            id: props.id,
            content: props.content,
            deadline: props.deadline,
            status: "Completed"
        })
    }

    const handlePendingButton = () => {
        updateTask({
            id: props.id,
            content: props.content,
            deadline: props.deadline,
            status: "Not Completed"
        })
    }

    const handleCancelButton = () => {
        deleteTask(props.id)
    }

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Button sx={{ color: "#201F2B" }} onClick={handleCheckButton}>
                    <CheckCircleIcon />
                </Button>
            </Grid>
            <Grid item>
                <Button sx={{ color: "#201F2B" }} onClick={handlePendingButton}>
                    <AvTimerIcon />
                </Button>
            </Grid>
            <Grid item>
                <Button sx={{ color: "#201F2B" }} onClick={handleCancelButton}>
                    <CancelIcon />
                </Button>
            </Grid>
        </Grid>
    );
}

export default function ToDoListScreen() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetTasksQuery()

    const headers = [
        ["Task", "Deadline", "Status", "Operations"]
    ];

    let rows = [];

    if (isSuccess) {
        for (let i = 0; i < data.length; i++) {
            let props = []
            rows.push([])
            for (const x in data[i]) {
                if (x !== "id") {
                    rows[i].push(data[i][x])
                }
                props.push(data[i][x])
            }
            rows[i].push(<OperationSection content={props[0]} deadline={props[1]} id={props[3]} status={props[2]} />)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1>To Do List</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 18 }}>
                <Grid item xs={12}>
                    <StyledTable headers={headers} rows={rows} />
                </Grid>
            </Grid>
        </Box>
    )
}