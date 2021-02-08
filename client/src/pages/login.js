import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Axios from "axios";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function login(e) {
        e.preventDefault()
        try {
            await Axios({
                method: "POST",
                data: {
                    username: loginUsername,
                    password: loginPassword,
                },
                withCredentials: true,
                url: "http://localhost:3001/api/auth/login",
            })
            setLoginPassword("")
            setLoginUsername("")
            await getLoggedIn()
            history.push("/transaction");
        } catch (err) {
            console.log(err)
        }
    };
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const divider = { margin: '20px' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} spacing={3}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Log in</h2>
                </Grid>
                <TextField label='Username' onChange= {(e)=> {setLoginUsername(e.target.value)}} placeholder='Enter username' fullWidth required />
                <TextField label='Password' onChange= {(e)=> {setLoginPassword(e.target.value)}} placeholder='Enter password' type='password' fullWidth required />
                <div style={divider}></div>
                <Button type='submit' onClick= {login}color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )

}
export default Login