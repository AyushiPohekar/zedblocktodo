import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { API } from "../global";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, email, password);

    try {
      const res = await axios.post(`${API}/api/users/signup`, {
        username,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="loginContainer">
      <div className="left">
        <div className="imglogin">
          <img src="https://images.hiverhq.com/blog/wp-content/uploads/2021/12/tr:pr-true/5-Reasons-Why-Contact-Centers-Are-On-The-Rise-For-Customer-Service-Teams.png" />
        </div>
      </div>
      <div className="right">
        <div className="FormContainer">
          <h1 className="loginheading">Welcome</h1>

          <form className="loginform" onSubmit={handleSubmit}>
            <div>
              <label for="username">Name</label>
              <input
                type="text"
                placeholder="User Name"
                id="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label for="email">Email</label>
              <input
                type="text"
                placeholder="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label for="password">password</label>
              <input
                type="text"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="loginbtn">SignUp</button>
            <p>
              Have account Already? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
