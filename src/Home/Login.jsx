import React, { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../src/Home/Login.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/main";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <section id="login">
      <div className="LoginContainer">
        <div className="login_header">
          <h1>LOGIN</h1>
        </div>

        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="loginEmail">
            <MailOutlineIcon />
            <input type="email" placeholder="Email" name="email" required onChange={handleChange} value={data.email} />
          </div>

          <div className="loginPassword">
            <LockOpenIcon />
            <input type="password" placeholder="Password" name="password" require onChange={handleChange} value={data.password} />
          </div>

          {error && <div>{error}</div>}

          <input type="submit" value="Login" className="loginBtn" />
        </form>

        <div className="login_nav">
          <p>Belum punya akun ?</p>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
