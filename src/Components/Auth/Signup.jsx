import React from 'react';
import './signup.css';

const Signup = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h1 className="form-title">Sign Up</h1>
        <p className="form-subtitle">
          Get started with an account on <span className="brand-text">Renteae</span>
        </p>

        {/* Google Sign Up Button */}
        <button className="google-btn">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/0/google.svg" 
            alt="Google icon" 
          />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Input Fields */}
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input type="text" placeholder="Full Name" className="input-field active" />
          </div>
          
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>

          <div className="input-group">
            <input type="password" placeholder="Confirm Password" className="input-field" />
            <span className="helper-text">At least 8 characters</span>
          </div>

          {/* Terms and Conditions */}
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By registering you agree with our <span className="link-text">Terms & Conditions</span>
            </label>
          </div>

          {/* Proceed Button */}
          <button type="submit" className="proceed-btn">Proceed</button>
        </form>

        {/* Footer Link */}
        <p className="footer-text">
          Already have an account? <span className="link-text font-bold">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;