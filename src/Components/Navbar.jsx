import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; 
import apartmentList from "./Data/Index";
import Properties from "./propeties";
function Navbar() { 
    return (
        <>
            <div className="navs">
                <h1 className="big">RentEase</h1>
                {/* <Property/> */}
                
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link> 
                <Link to="/pages">Pages</Link>
                <Link to="/properties">Properties List</Link>
                <Link to="/contact">Contact Us</Link>

                <Link to="/signup" className="btn"> Sign-Up</Link>
            </div>
        </>
    );
}

export default Navbar;