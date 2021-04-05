import { Link } from 'gatsby'
import React from 'react'
import { Footer } from './Footer'

export const Header = () => {
    return (
        <div className="header-container">
            <p>Zee-Technology Software House</p>
            <header>
                <nav>
                    <ul className="nav-links">
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/blog">Blog</Link> </li>
                        <li> <Link to="/contact">Contact Us</Link> </li>
                        <li> <Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
