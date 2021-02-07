import Axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  const logOut = () => {
    Axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:3001/api/auth/logout",
    }).then((res) => {
    console.log(res)
    getLoggedIn()
    }).then(() => {
        history.push("/");
    });
};

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;