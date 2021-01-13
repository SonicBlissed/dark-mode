import React, { useState } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
const Navbar = (props) => {
  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
    //use local storage hook here
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
