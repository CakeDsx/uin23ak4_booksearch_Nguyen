import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import logoImg from "../pages/images/logo.png"
import {HiOutlineMenuAlt3} from 'react-icons/hi'

// button that can be clicked to show a button that takes you "Home"
const Navabar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleNavbar = () => setToggleMenu(!toggleMenu)

    return (
        <nav className='navbar' id = "navbar">
            <div className='container navbar-content flex'>
                <div className='brand-and-toggler flex felx-sb'>
                    <Link to = "/" className='navbar-brand flex'>
                        <img src = {logoImg} alt  = "site logo" />
                        <span className='text-uppercase fw-7 fs-24 ls-1'></span>
                    </Link>
                    <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size={35} style = {{
                            color: `${toggleMenu ? "#fff" : "#010101"}`
                        }} />
                    </button>
                </div>

                <div className={toggleMenu ? "navbar-collapse snow-navbar-collapse" : "navbar-collapse"}>
                    <ul className= "navbar-nav">
                        <li className='nav-item'>
                            <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navabar