import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {
    let history = useHistory();

    function handleLogout(event) {
        if (localStorage.length > 0) {
            localStorage.clear();
        }

        history.push("/user/login");
    }

    return (
        <div>
           <button onClick={handleLogout} className="logout-btn">Log Out</button> 
        </div>
    )
}
