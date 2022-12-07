import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

export default function LoginScreen() {
    const [name, setName] = useState("");

    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <TextField id="username" label="username" variant="outlined" onChange={handleChange} value={name}/>
            <Link to="home">
                <Button variant="contained">Student</Button>
            </Link>
            <Link to="home">
                <Button variant="contained">Student</Button>
            </Link>
        </Box>
    )
}