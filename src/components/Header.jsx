

import React from 'react';
import { useNavigate } from 'react-router-dom';
import collegexplorer from '../assets/collegexplorerlogo.png';

const MenuIcon = ({ className = "icon" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const NavLink = ({ href, children }) => (
    <a href={href} className="nav-link">{children}</a>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate();
    
    return (
        <header className="header">
            <div className="container header-content">
                <div className="header-brand">
                     <img src={collegexplorer} alt="Collegexplorer Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <NavLink href="/home">Home</NavLink>
                    <NavLink href="/colleges">Colleges</NavLink>
                    <NavLink href="/courses">Courses</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/blog">Blogs</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                    <NavLink href="/enrollnow">Enroll Now</NavLink>
                </nav>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button">
                    <MenuIcon />
                </button>
            </div>
             {isMenuOpen && (
                <div className="mobile-nav-container">
                    <nav className="mobile-nav">
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="/colleges">Colleges</NavLink>
                        <NavLink href="/courses">Courses</NavLink>
                        <NavLink href="/about">About </NavLink>
                        <NavLink href="/blog">Blogs</NavLink>
                        <NavLink href="/contact">Contact Us</NavLink>
                        <NavLink href="/enrollnow">Enroll Now</NavLink>
                    </nav>
                </div>
            )}
        </header>
    );
};
