import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Axios from "axios";

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
    return (
        <div>
            <h1>Login</h1>
            <input
                placeholder="username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
        </div>
    )
}
export default Login