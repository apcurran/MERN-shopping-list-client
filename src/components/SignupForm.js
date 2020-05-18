import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerCall, setTriggerCall] = useState(false);
    const [error, setError] = useState("");

    let history = useHistory();

    useEffect(() => {
        async function fetchData() {
            if (!triggerCall) return; // Only trigger on form submit

            const API_URL = "/api/user/register";

            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name,
                  email,
                  password
                })
            };
    
            try {
                
                const response = await fetch(API_URL, options);
                const data = await response.json();
                
                // Return from function if an error has been set
                if (data.hasOwnProperty("error")) {
                    setError(data.error);
                    setTriggerCall(false);

                    return;
                }

                setTriggerCall(false); // Reset trigger
                history.push("/user/login");
    
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
              <label htmlFor="login-name" className="form-group__label">Name</label>
              <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                id="login-name"
                name="login-name"
                className="form-group__input"
              />
          </div>
          <div className="form-group">
              <label htmlFor="login-email" className="form-group__label">Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                id="login-email"
                name="login-email"
                className="form-group__input"
              />
          </div>
          <div className="form-group">
              <label htmlFor="login-password" className="form-group__label">Password</label>
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
