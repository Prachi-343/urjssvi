import React, { useState } from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Login = ({ email, setEmail, password, setPassword, handleLogin, error }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupMobile, setSignupMobile] = useState('');
  const [signupGender, setSignupGender] = useState('male');

  const handleSignup = (e) => {
    e.preventDefault();
    
  };

  return (
    <div>
      {!showSignup ? (
        <div id="login-dialog" className="zoom-anim-dialog">
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <form id="login-form" onSubmit={handleLogin}>
            <input 
              type="text" 
              id="login-email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              id="login-password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="ast_login_data">
              <label className="tp_custom_check">
                Remember me
                <input type="checkbox" id="remember-me" />
                <span className="checkmark"></span>
              </label>
              <a href="#" id="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="ast_btn">Login</button>
            <p>Create An Account? <a href="#" id="go-to-signup" onClick={() => setShowSignup(true)}>SignUp</a></p>
          </form>
        </div>
      ) : (
        <div id="signup-dialog" className="zoom-anim-dialog">
          <h1>Signup</h1>
          <form id="signup-form" onSubmit={handleSignup}>
            <input 
              type="text" 
              placeholder="Name" 
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Email" 
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Mobile Number" 
              value={signupMobile}
              onChange={(e) => setSignupMobile(e.target.value)}
            />
            <select 
              value={signupGender}
              onChange={(e) => setSignupGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button type="submit" className="ast_btn">Submit</button>
            <p>Have An Account? <a href="#" onClick={() => setShowSignup(false)}>Login</a></p>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;