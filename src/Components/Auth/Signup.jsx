import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = ({ onSignupSuccess }) => {
  const navigate = useNavigate();
  
  // State management
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // 1. Notify Navbar to hide the "Sign-Up" button
    if (onSignupSuccess) onSignupSuccess();

    // 2. Show the success view locally
    setIsSubmitted(true);

    // 3. Redirect to Home after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        {!isSubmitted ? (
          <>
            <h1>Sign Up</h1>
            <p className="header-subtitle">
              Get started with an account on <span className="brand">Renteae</span>
            </p>

            <button type="button" className="google-signup">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" />
              Sign up with Google
            </button>

            <div className="or-divider">or</div>

            <form className="signup-form" onSubmit={handleProceed}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input-field primary-input"
                required
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input-field"
                required
                onChange={handleChange}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input-field"
                required
                onChange={handleChange}
              />

              <span className="hint-text">At least 8 characters</span>

              <div className="terms-section">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                />
                <label htmlFor="terms">
                  By registering you agree with our <a href="#">Terms & Conditions</a>
                </label>
              </div>

              <button
                type="submit"
                className="proceed-btn"
                disabled={!formData.agreed}
              >
                Proceed
              </button>
            </form>
          </>
        ) : (
          <div className="success-view">
            <div className="success-icon">✓</div>
            <h2>Welcome!</h2>
            <p>Account for <strong>{formData.fullName}</strong> created successfully.</p>
            <p className="redirect-text">Redirecting to home...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;