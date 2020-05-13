import React, { useState, useEffect } from 'react';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className="login-form form">
          <div className="form-group">
              <label htmlFor="login-name" className="form-group__label">Email</label>
              <input type="email" id="login-email" name="login-email" className="form-group__input"/>
          </div>
          <div className="form-group">
              <label htmlFor="login-name" className="form-group__label">Password</label>
              <input type="password" id="login-password" name="login-password" className="form-group__input"/>
          </div>
          <div className="form-group">
              <button type="submit" className="form-group__submit">Submit</button>
          </div>
        </form>
    )
}
