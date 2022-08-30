import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <button className='button'>
                <Link className="link" to="/portfolio">Home</Link>
            </button>
            <button className='button'>
                <Link className="link" to="/About">About</Link>
            </button>
            <button className='button'>
                <Link className="link" to="/Projects">Projects</Link>
            </button>
            <button className='button'>
                <Link className="link" to="/Contact">Contact Me</Link>
            </button>
        </div>
    )
}

export default Navbar;