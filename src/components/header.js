// components/Header.js

import React from 'react';
import {  Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
  <div>
<nav className="bg-blue-100">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <NavLink exact to="/" activeClassName="active">Anasayfa</NavLink>
                </li>
                <li>
                <NavLink to="/about" activeClassName="active">Hakkımızda</NavLink>
                </li>
                <li>
                <NavLink to="/contact" activeClassName="active">İletişim</NavLink>
                </li>
            </ul>
        </div>
    </div>
</nav> 
  </div>
  );
}

export default Header;
