import React from "react";
import "./style.css";
const LoginForm = props => {
   return (
    <div className>
        <h1>Login</h1>
        <input
        placeholder="username"
        value={props.loginUsername}
        onChange={props.setUsername}
        />
        <input
        type="password"
        placeholder="password"
        value={props.loginPassword}
        onChange={props.setPassword}
        />
        <button onClick={props.login}>Submit</button>
    </div>  
   )   
}
export default LoginForm
