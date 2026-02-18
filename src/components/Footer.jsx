import React from 'react';

const NavLink = ({ href, children }) => (
    <a href={href} className="nav-link">{children}</a>
);

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3>Collegexplorer</h3>
                        <p>Your one-stop destination for finding the right college and course to shape your future. We are dedicated to providing accurate and updated information.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><NavLink href="/about">About Us</NavLink></li>
                            <li><NavLink href="/contact">Contact Us</NavLink></li>
                            <li><NavLink href="/blog">Blogs</NavLink></li>
                            <li><NavLink href="#">Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Top Streams</h3>
                        <ul>
                            <li><NavLink href="/engineering">Engineering</NavLink></li>
                            <li><NavLink href="/management">Management</NavLink></li>
                            <li><NavLink href="/medical">Medical</NavLink></li>
                            <li><NavLink href="#">Arts & Design</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <p>314, Sapphire Square, Tower square, Indore (M.P.) 452001</p>
                        <p>Email: collegexplorer24@gmail.com</p>
                        <p>Phone: +91 9111000052</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Collegexplorer. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
