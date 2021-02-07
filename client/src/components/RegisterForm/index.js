import React from "react";
import "./style.css";
const RegisterForm = props => {
    return (
        <div>
            <h1>Register</h1>
            <input
                placeholder="username"
                onChange={props.setUsername}
            />
            <input
                placeholder="password"
                onChange={props.setPassword}
            />
            <button onClick={props.register}>Submit</button>
        </div>
    )
}
export default RegisterForm