import "boxicons";
import React, { useState } from "react";

function LoginForm({ error, login }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    login(details);
  }
  function showHandler() {
    setShowPass(!showPass);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? (
          <div className="popUp">{error}</div>
        ) : (
          <div className="popUp hide">{error}</div>
        )}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          {showPass ? (
            <>
              <input
                type="text"
                name="password"
                id="password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                required
              />

              <box-icon
                onClick={showHandler}
                name="show"
                type="solid"
                color="rgba(103,101,101,0.47)"
              ></box-icon>
            </>
          ) : (
            <>
              <input
                type="password"
                name="password"
                id="password"
                value={details.password}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                required
              />
              <box-icon
                onClick={showHandler}
                name="hide"
                type="solid"
                color="rgba(103,101,101,0.47)"
              ></box-icon>
            </>
          )}
        </div>
        <input type="submit" value="SUBMIT" />
      </div>
    </form>
  );
}

export default LoginForm;
