import { Card, CardContent, Box, CardActions, Button, TextField, Typography } from '@mui/material';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import {useEffect, useState} from 'react';
import axiosInstance from '../axios-instance.js'

const BugDashboard = () => {
    const [bugs,setBugs] = useState([]);
    const fetchBugs = async () => {
        const result = await axiosInstance.get('/bugs/');
        console.log(result.data);
        setBugs(result.data);
    }
    useEffect(()=>{
        fetchBugs();
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
            <Box sx={{display:"flex",padding:"20px"}}>
                {bugs.map((bug)=>(
                    <Card sx={{maxWidth:"250px"}}>
                        <CardContent>
                            <Typography>{bug?.title}</Typography>
                            <Typography>{bug?.steps}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default BugDashboard;