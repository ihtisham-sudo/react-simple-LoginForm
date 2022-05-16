import "./App.css";
import LoginForm from "./components/LoginForm2";
import React, { useState } from "react";

function App() {
  const adminUser = {
    name: "max payne",
    email: "payne@",
    password: "123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  let timer = setTimeout(() => setError(""), 1000);
  function Login(details) {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({ name: details.name, email: details.email });
    } else {
      setError("irgendwas ist nicht richtig!");
      clearTimeout(timer);
    }
  }

  function Logout(details) {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
      {user.email && user.name !== "" ? (
        <div className="welcome">
          Welcome <b>{user.name}</b> <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm error={error} login={Login} />
      )}
    </div>
  );
}

export default App;
