import React from 'react';
import ReactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-white text-xl font-bold flex items-center">
                    <img src={ReactLogo} alt="React Logo" className="w-8 h-8 mr-2" />
                    React App
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-4">
                    <Link to="/registration" className="text-white">User Registration</Link>
                    <Link to="/data-view" className="text-white">User Data View</Link>
                    <Link to="/download" className="text-white">Excel File Download</Link>
                    <Link to="/upload" className="text-white">Upload Excel File</Link>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
