import React, { useState } from "react";
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../src/Home/SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <section id="SignUp">
      <div className="SignUpContainer">
        <div className="signUp_header">
          <h1>REGISTER</h1>
        </div>

        <form className="signUpForm" onSubmit={handleSubmit}>
          <div className="signUpName">
            <FaceIcon />
            <input type="text" placeholder="Name" required name="name" onChange={handleChange} value={data.name} />
          </div>

          <div className="signUpEmail">
            <MailOutlineIcon />
            <input type="email" placeholder="Email" required name="email" onChange={handleChange} value={data.email} />
          </div>

          <div className="signUpPassword">
            <LockOpenIcon />
            <input type="password" placeholder="Password" required name="password" onChange={handleChange} value={data.password} />
          </div>

          {<div className="text-white">{error}</div>}

          <input type="submit" value="Register" className="signUpBtn" />
        </form>

        <div className="signUp_nav">
          <p>Sudah punya akun ?</p>
          <Link to="/">Log In</Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
