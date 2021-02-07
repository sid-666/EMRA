import React, {useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../LogoutBtn"

function Nav() {
    const { loggedIn } = useContext(AuthContext);
    return (
        <div className = "top-bar">
            <div className = "top-bar-left">
                <ul className = "horizontal-menu">
                    <li className = "menu-text"><Link to = "/home">TransactionApp</Link></li>
                </ul>
            </div>
            <div className = "top-bar-right">
                <ul className = "horizontal-menu">
                    {loggedIn === false && (
                        <>
                        <li><Link to = "/login">Login</Link></li>
                        <li><Link to = "/register">Register</Link></li>
                        </>
                    )}
                    {loggedIn === true && (
                        <>
                        <li><Link to = "/dashboard">Dashboard</Link></li>
                        <li><Link to = "/transaction">Save</Link></li>
                        <li><LogoutBtn></LogoutBtn></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
