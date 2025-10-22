import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";


export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 
  



 const handleSubmit = async (e) => {
  e.preventDefault();
  setError(""); // clear any previous error

  // ✅ Basic validation
  if (!username || !email || !password) {
    setError("Please fill all fields");
    return;
  }

  if (username.length < 3) {
    setError("Username must be at least 3 characters");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Please enter a valid email");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  setIsLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Registration failed");
    }

    console.log("✅ Registration successful:", data);
    window.location.href = "/"; // redirect after success

  } catch (err) {
    console.error("❌ Error during registration:", err.message);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

return (
  <div className="auth-container">
    <div className="auth-background">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-line line-1"></div>
      <div className="floating-line line-2"></div>
    </div>

    <div className="auth-content">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join us today</p>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>

          <button type="submit" disabled={isLoading} className="auth-button">
            {isLoading ? "Creating account..." : "Register"}
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-text">
            Already have an account?{" "}
            <Link to="/" className="auth-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}
