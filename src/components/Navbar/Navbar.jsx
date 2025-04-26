import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div id="site-title" className="flex items-center gap-x-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-green-700 bg-clip-text text-transparent">Book Vibe</h3>
            </div>
            <ul id="nav-links" className="flex items-center gap-x-4 text-lg">
                <NavLink to='/' className="px-5 py-3 rounded-lg">
                    Home
                </NavLink>
                <NavLink to='/books' className="px-5 py-3 rounded-lg">
                    Listed Books
                </NavLink>
                <NavLink to='/pages-to-read' className="px-5 py-3 rounded-lg">
                    Pages to Read
                </NavLink>
            </ul>
            <div id="nav-buttons" className="flex gap-x-4">
                <button type="button" className="px-7 py-4 rounded-xl text-lg font-semibold bg-primary text-base">
                    Sign In
                </button>
                <button type="button" className="px-7 py-4 rounded-xl text-lg font-semibold bg-cyan-500 text-base">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;