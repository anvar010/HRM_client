import React from 'react';
import Landing_Nav from '../landing/Landing_Nav';
import './Login.css'; 

function LandingLogin () {
  return (
    <body>
      
      <Landing_Nav/>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            
            {/* <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            /> */}
            <h1 className="opacity">LOGIN</h1>
            <form>
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="PASSWORD" />
              <button className="opacity">SUBMIT</button>
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
    </body>
  );
};

export default LandingLogin;
