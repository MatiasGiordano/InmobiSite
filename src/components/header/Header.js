import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserArea from './UserArea';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <UserArea />
    </header>
  );
}

export default Header;
