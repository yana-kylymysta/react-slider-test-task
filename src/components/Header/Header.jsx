import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="softformance logo" />
    </header>
  )
}

export {
    Header
} 