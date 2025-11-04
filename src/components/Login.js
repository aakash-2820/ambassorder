import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    try{
      const response = await fetch("https://ambassador.selfmade.technology/api/logins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }
      console.log("✅ Login successful:", data);
      localStorage.setItem("token", data.token);
      setTimeout(() => {
      setIsLoading(false);
      console.log("Login successful:", { email });

      // ✅ Simple redirect to home page (React)
      window.location.href = "/HomePage";
    }, 1000);
    }
    catch(err) {
      console.error("Error during login:", err.message);
      setError(err.message);
    }
    
  };

  return (
    <div className="auth-container">
     

      <div className="auth-content">
        <div className="auth-card">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
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
              <label htmlFor="password" className="form-label">Password</label>
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
              {isLoading ? "Signing in..." : "Login"}
            </button>
          
          </form>

          <div className="auth-footer">
            <p className="auth-text">
              Don't have an account?{" "}
              <Link to="/Register" className="auth-link">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}