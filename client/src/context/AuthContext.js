
import React, { createContext, useState, useEffect } from "react";
import Axios from "axios"
const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);

    function getLoggedIn() {
        console.log("i am in function")
        // const loggedInRes = await axios.get("http://localhost:5000/auth/loggedIn");  
        Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3001/api/auth/loggedIn`,
        }).then((res) => {
            console.log(res)
            setLoggedIn(res.data)
        })

    }

    useEffect(() => {
        console.log("I am in render")
        console.log(loggedIn)
        getLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { AuthContextProvider };