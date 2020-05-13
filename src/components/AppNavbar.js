import React from 'react';
import { Link } from "react-router-dom";

export default function AppNavbar() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    Shop 2000
                </Link>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/user/list" className="nav__link">
                            Your List
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/user/login" className="nav__link">
                            Log In
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/user/logout" className="nav__link">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
