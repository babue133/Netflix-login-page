import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");

  function handleUser(evt) {
    setUser(evt.target.value);
  }

  function handlePass(evt) {
    setPass(evt.target.value);
  }

  async function check() {
    if (!user || !pass) {
      setMessage("⚠️ Username and password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: user,
        password: pass,
      });

      if (response.data.success) {
        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/dashboard"), 1500);
      } else {
        setMessage("❌ Invalid credentials");
        setTimeout(() => navigate("/fail"), 1500);
      }
    } catch (err) {
      setMessage("⚠️ Server error. Please try again later.");
    }

    // Clear inputs after any attempt
    setUser("");
    setPass("");
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="logo">NETFLIX</h1>

        {message && <p className="message">{message}</p>}

        <input
          onChange={handleUser}
          name="username"
          placeholder="Username"
          value={user}
        />
        <input
          onChange={handlePass}
          name="password"
          placeholder="Password"
          type="password"
          value={pass}
        />
        <button onClick={check}>Log in</button>

        <div className="options">
          <label>
            <input type="checkbox" /> Save login info
          </label>
          <p>Need help?</p>
        </div>

        <p className="signup">
          New to Netflix? <p>Sign up now.</p>
        </p>
      </div>
    </div>
  );
}

export default App;
