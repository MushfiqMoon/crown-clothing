import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navigation'>
            <div className="logo-container">
                <img src="./crown.svg" alt="logo" />
            </div>
            <div className="nav-links-container">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
            </div>
        </div>
    )
}

export default Navbar