import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function AppNavbar() {
    const [haveToken, setHaveToken] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            setHaveToken(true);
        }
    }, [haveToken]);

    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    Shop 2000
                </Link>
                <ul className="nav__list">
                    {haveToken ? (
                        <li className="nav__item">
                            <Link to="/user/list" className="nav__link">
                                Your List
                            </Link>
                        </li>
                    ) : (
                        null
                    )}
                    <li className="nav__item">
                        <Link to="/user/login" className="nav__link">
                            Log In
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
