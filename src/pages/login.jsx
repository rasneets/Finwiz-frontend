import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/login.css";
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formdata, setFormdata] = useState({name:"", email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://finwiz-backend.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formdata.name,
          email: formdata.email,
          password: formdata.password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        login(data.token);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={formdata.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={formdata.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
          value={formdata.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
