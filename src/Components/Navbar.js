import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar'>
            <button>
                <Link to="/portfolio">Home</Link>
            </button>
            <button>
                <Link to="/About">About</Link>
            </button>
            <button>
                <Link to="/Projects">Projects</Link>
            </button>
            <button>
                <Link to="/Contact">Contact Me</Link>
            </button>
        </div>
    )
}

export default Navbar;