import { Card, CardContent, Box, CardActions, Button, TextField, Typography } from '@mui/material';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import {useEffect, useState} from 'react';

const BugDashboard = () => {
    const [bugs,setBugs] = useState([]);

    useEffect(()=>{
        const result = await axios.get('/');
    },[])
    return (
        <Box>
            <Box sx={{
                 backgroundColor: "black",
                  color: "white",
                   height: "40px",
                   textAlign: "center",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center"}}>
                <Typography>Bug app</Typography>
                <BugReportOutlinedIcon />
            </Box>
        </Box>
    )
}

export default BugDashboard;