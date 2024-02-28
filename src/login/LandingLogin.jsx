import axios from 'axios';
import React, { useState } from 'react';
import Landing_Nav from '../landing/Landing_Nav';
import './Login.css';

function LandingLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const HOSTED_SERVER_URL = 'http://localhost:3000'; 

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, {
        email,
        password,
      });

      if (response.data.statusCode === 200) {
        
        console.log('Login successful');
        alert('Login successful!');
        // history.push('/add_user');
        localStorage.setItem('accessToken', response.data.data);
       
        
        
      } else {
        
        console.error('Login failed:', response.data.message);
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <Landing_Nav />
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <h1 className="opacity">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="EMAIL"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={handlePasswordChange}
              />
              <button className="opacity" type="submit" onClick={handleLogin}>
                SUBMIT
              </button>
            </form>
            <div className="register-forget opacity">
              <a href="">REGISTER</a>
              <a href="">FORGOT PASSWORD</a>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
  );
}

export default LandingLogin;
