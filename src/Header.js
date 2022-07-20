import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
<link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet"></link>


const Header = () => {
  return (
    <header className='all-header'>
        <Link to = '/' className='header-name'>
            QPICK
        </Link>
        <Link to = '/' className='header-heart'>
            <img src = "pictures/Heart.svg" width="22" height="20"></img>
        </Link>
        <Link to = '/' className='header-cart'>
            <img src = "pictures/Cart.svg" width="23.2" height="23.2"></img>
        </Link>
    </header>
  )
}

export default Header