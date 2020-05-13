import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = JSON.stringify({
            email,
            password
        });

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const loggedInUser = await Axios.post("/api/user/login", data, config);
            const token = loggedInUser.data;

            localStorage.setItem("authToken", token);
            // Redirect to shopping list view
            history.push("/user/list");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="login-form form">
          <div className="form-group">
              <label htmlFor="login-name" className="form-group__label">Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                id="login-email"
                name="login-email"
                className="form-group__input"
              />
          </div>
          <div className="form-group">
              <label htmlFor="login-name" className="form-group__label">Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                id="login-password"
                name="login-password"
                className="form-group__input"
              />
          </div>
          <div className="form-group">
              <button type="submit" className="form-group__submit">Submit</button>
          </div>
        </form>
    )
}
