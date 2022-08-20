import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>E-</span>Shop
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <Router>
            <ul>
              <li>
                <NavLink to="/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/kids">Kids</NavLink>
              </li>
            </ul>
          </Router>
        </div>

        {/* 3rd social media links */}
        <div className="nav-icons">
          <ul className="nav-icons-desktop">
            <li>
              <a>
                <FaSearch className="search" />
              </a>
            </li>
            <li>
              <a>
                <FaShoppingCart className="shop-cart" />
              </a>
            </li>
            <li>
              <a>
                <BsFillPeopleFill className="people" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="line-1"></div>
    </>
  );
};

export default Navbar;
