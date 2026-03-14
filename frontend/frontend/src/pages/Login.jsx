import { useState } from "react";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
  try {

    const res = await API.post("/auth/login", { email, password });

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");

  } catch (err) {

    alert("Invalid credentials");

  }
};

  return (
    <div className="container">

      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <br/>

      <input type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <br/>

      <button onClick={handleLogin}>Login</button>
      <p style={{ marginTop: "10px" }}>
  Don't have an account? <Link to="/">Register</Link>
</p>

    </div>
  );
}