import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';
import Logo from './Logo.png'


function Nav() {

    const navStyle ={
        color: 'white'
        
    }

  return (
    <nav>
        <img className="logo-class" src={Logo}/>
        <ul className ="nav-links">
            <Link style={navStyle} to='/about'>
                <li>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
