import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {Card, CardContent, Box, CardActions, Button, TextField } from '@mui/material';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = async () => {
        try{
            const result = await axios.post('http://localhost:4000/auth/login',
            {email : email,password:password});
            const {token} = result.data;
            console.log(result)
            localStorage.setItem('token',token);
        } catch(e){
            console.log(e);
        }
    }

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Card sx={{ maxWidth: "400px", width:"100%", border: "1px solid black" }}>
                <CardContent>
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth value={email}
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </Box>
                    <Box sx={{ marginBottom: 2 }}>
                        <TextField id="password" label="Password" variant="outlined" fullWidth value={password}
                        onChange={(e)=> setPassword(e.target.value)} />
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" onClick={login}>Log in</Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Login;
