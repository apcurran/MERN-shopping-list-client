import React from 'react';
import { useHistory } from 'react-router-dom';
import logoutIcon from "../images/icon-logout.svg";

export default function Logout() {
    let history = useHistory();

    function handleLogout(event) {
        if (localStorage.length > 0) {
            localStorage.clear();
        }

        history.push("/user/login");
    }

    return (
        <div onClick={handleLogout} className="logout-group">
           <img src={logoutIcon} alt="Log out icon" className="logout-icon"/>
           <button className="logout-btn">Log Out</button> 
        </div>
    )
}
