// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/create">Create Content</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
