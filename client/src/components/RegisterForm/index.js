import React from "react";
import "./style.css";
const RegisterForm = props => {
   return (
    <div className>
        <h1>Register</h1>
        <input
        placeholder="username"
        onChange={props.setUsername}
        />
        <input
        placeholder="password"
        onChange={props.setPassword}
        />
        <button onClick={props.login}>Submit</button>
    </div>  
   )   
}
export default RegisterForm