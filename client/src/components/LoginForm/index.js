import React, {useState} from "react";
import "./style.css";
const LoginForm = props => {
   return (
    <div>
        <h1>Login</h1>
        <input
        placeholder="username"
        value={loginUsername}
        onChange={props.setUsername}
        />
        <input
        type="password"
        placeholder="password"
        value={loginPassword}
        onChange={props.setPassword}
        />
        <button onClick={props.login}>Submit</button>
    </div>  
   )   
}
