import loginsideimage from "../assets/loginpageimage.png"
import google_icon from "../assets/Google.svg"
import email_icon from "../assets/email.png"
import passowrd_icon from "../assets/password.png"
import person_icon from "../assets/person.png"

import axios from "axios";
import React, { useState } from "react";
import { Link } from 'react-router-dom';


export default function Login() {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3010/api/login/', formData);
          console.log(response.data);
          // Handle response here (e.g., redirect to login)
      } catch (error) {
          console.error('Error during form submission', error);
      }
  };
  
  return (
    <div className = 'auth-pages'>
      <div className = 'auth-images'>
        <img src={loginsideimage} alt=""/> 
      </div>
      <div className="auth-real">
        <div className="auth-header">
            <div className="auth-text">Welcome Back!</div>
            <div className="auth-text-lower">Log in to start from where you left off  </div>
            <div className="auth-underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="auth-inputs">
          <div className="auth-input">
            <input className="auth-input-box" type="email" placeholder="Email" name="email" onChange={handleChange}/>
          </div>
        </div>
        <div className="auth-inputs">
          <div className="auth-input">
            <input className="auth-input-box" type="password" placeholder="Password" name="password" onChange={handleChange}/>
          </div>
        </div>
        <button type ="submit" className="auth-submit auth-blue">Login</button>
        </form>
        <Link to="/sign" className="auth-switch">Already Signed Up? <span>Login</span></Link>
      </div>
      </div>
  )
  }