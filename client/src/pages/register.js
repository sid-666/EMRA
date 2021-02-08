import React, { useState } from "react";
import Axios from "axios";
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";
function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const history = useHistory();
    async function register(e) {
        e.preventDefault()
        try {
            await Axios({
                method: "POST",
                data: {
                    username: registerUsername,
                    password: registerPassword,
                },
                withCredentials: true,
                url: "http://localhost:3001/api/auth/register",
            })
            history.push("/login");
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
                    <h2>Register</h2>
                </Grid>
                <TextField label='Username' onChange={(e) => { setRegisterUsername(e.target.value) }} placeholder='Enter username' fullWidth required />
                <TextField label='Password' onChange={(e) => { setRegisterPassword(e.target.value) }} placeholder='Enter password' type='password' fullWidth required />
                <div style={divider}></div>
                <Button type='submit' onClick={register} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )

}
export default Register