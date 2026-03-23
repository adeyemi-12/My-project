import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CgProfile } from "react-icons/cg";

const Navbar = ({ isLoggedIn }) => {
  return (
     <>
            <div className="navs">
                <h1 className="big">RentEase</h1>
                {/* <Property/> */}
                
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link> 
                <Link to="/pages">Service</Link>
                <Link to="/properties">Properties List</Link>
                <Link to="/contact">Contact Us</Link>

                 <div className="nav-actions">
        {/* The button ONLY shows if the user is NOT logged in */}
        {!isLoggedIn && (
          <Link to="/signup" className="btn"> Sign-Up</Link>
            
        
        )}
        
        {/* Optional: Show a "Profile" or "Logout" button when they ARE logged in */}
        {isLoggedIn && (
          <div className="user-profile-icon">
           <CgProfile />
          </div>
        )}
      </div>
            </div>
    
        </>
  );
};

export default Navbar;