import React from 'react';
import '../css/animate.css';
import '../css/bootstrap.css';
import '../css/font-awesome.css';
import '../css/fonts.css';
import '../css/owl.carousel.css';
import '../css/owl.theme.default.css';
import '../css/magnific-popup.css';
import '../css/style.css';

const Login = ({ email, setEmail, password, setPassword, handleLogin, error }) => {
  return (
    <div id="login-dialog" className="zoom-anim-dialog mfp-hide">
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
        <p>Create An Account? <a href="#" id="go-to-signup">SignUp</a></p>
      </form>
    </div>
  );
}

export default Login;
