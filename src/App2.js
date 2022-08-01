import "./App.css";
import LoginForm from "./components/LoginForm2";
import React, { useState } from "react";

function App() {
  const Seller = {
    name: "seller",
    email: "seller@seller.com",
    password: "1234",
  };
  const Purchaser = {
    name: "purchaser",
    email: "purchaser@purchaser.com",
    password: "1234",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  let timer = setTimeout(() => setError(""), 1000);
  function Login(details) {
    if (
      details.email === Seller.email &&
      details.password === Seller.password 
      
    ) {
      setUser({ name: details.name, email: details.email });
    } else if (
      details.email === Purchaser.email &&
      details.password === Purchaser.password 
    ){
      setUser({ name: details.name, email: details.email });
    }
    else {
      setError("Credientials are incorrect");
      clearTimeout(timer);
    }
  }

  function Logout(details) {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
     {user.email === Seller.email && user.name === Seller.name ? (
        <div className="welcome">
          Welcome <b>{user.name}</b>
          <button>Tempreture Data</button>
          <button>Refund</button>
          <button>Previous Records</button>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm error={error} login={Login} />
      )}
      <br></br>
      {user.email === Purchaser.email && user.name === Purchaser.name ? (
        <div className="welcome">
          Welcome <b>{user.name}</b>
          <button>Balance Check</button>
          <button>Tempreture Data</button>
          <button>Deposit</button>
          <button onClick={Logout}>Logout</button>

          </div>
      ) : (
        <LoginForm error={error} login={Login} />
      )}
    </div>
  );
}

export default App;
