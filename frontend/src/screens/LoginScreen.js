import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUserTypeReducer } from '../redux/reducers/userTypeSlice';

export default function LoginScreen() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleChange = event => {
        setName(event.target.value)
    };

    const handleStudentButton = () => {
        const userState = {
            username: name,
            userType: "student"
        }
        dispatch(setUserTypeReducer(userState))
    };

    const handleCoordinatorButton = () => {
        const userState = {
            username: name,
            userType: "coordinator"
        }
        dispatch(setUserTypeReducer(userState))
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <TextField id="username" label="username" variant="outlined" onChange={handleChange} value={name}/>
            <Link to="home">
                <Button variant="contained" onClick={handleStudentButton}>Student</Button>
            </Link>
            <Link to="home">
                <Button variant="contained" onClick={handleCoordinatorButton}>Coordinator</Button>
            </Link>
        </Box>
    )
}