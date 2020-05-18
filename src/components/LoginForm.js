import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerCall, setTriggerCall] = useState(false);
    const [error, setError] = useState("");

    let history = useHistory();

    useEffect(() => {
        async function fetchData() {
            if (!triggerCall) return; // Only run hook on triggering form submit

            const API_URL = "/api/user/login";

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email,
                  password
                })
            };
    
            try {
                
                const response = await fetch(API_URL, options);
                const data = await response.json();
                
                // Return from function if an error has been set
                if (data.hasOwnProperty("message")) {
                    setError(data.message);
                    setTriggerCall(false);

                    return;
                }

                const token = data;
    
                localStorage.setItem("authToken", token);
                setTriggerCall(false); // Reset trigger
                history.push("/user/list");
    
            } catch (err) {
                setTriggerCall(false); // Reset trigger
                console.error(err);
            }
        }

        fetchData();
    }, [triggerCall]);


    function handleSubmit(event) {
        event.preventDefault();

        setTriggerCall(true);
    }

    return (
        <form onSubmit={handleSubmit} className="login-form form">
          {error ? (
              <h3 className="form__error">{error}</h3>
          ) : null }
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
