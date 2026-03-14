import { useState } from "react";
import API from "../api/api";
import { useNavigate, Link } from "react-router-dom";


export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  try {

    await API.post("/auth/register", { name, email, password });

    alert("User registered!");

    navigate("/login");

  } catch (err) {
    alert(err.response.data.message);
  }
};

  return (
    <div className="container">
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <br/>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br/>

      <input placeholder="Password" type="password"
        onChange={e => setPassword(e.target.value)} />
      <br/>

      <button onClick={handleRegister}>Register</button>

      <p style={{ marginTop: "10px" }}>
  Already have an account? <Link to="/Login">Login</Link>
    </p>
    </div>
  );
}