import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header-div">
            <ul>
                <li><Link className='link-no-underline nav-links' to={'/login'}>login</Link></li>
                <li><Link className='link-no-underline nav-links' to={'/watchlist'}>watchlist</Link></li>
            </ul>
        </div>
    )
}

export default Header
