import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom"
import Axios from "axios";

function Register() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const history = useHistory()

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:3001/api/auth/register",
        }).then((res) => {
            console.log(res)
            setRegisterPassword("")
            setRegisterUsername("")
            history.push("/login");
        });
    };
    return (
        <RegisterForm
            setUsername={(e) => setRegisterUsername(e.target.value)}
            setPassword={(e) => setRegisterPassword(e.target.value)}
            register={register}
        ></RegisterForm>
    )
}
export default Register