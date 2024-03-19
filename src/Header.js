import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headingData'>
        <FontAwesomeIcon icon={faBars} style={{ color: 'black' }} /> TIME
      </div>
      <div className='search-container'>
        <input type='text' className='search' placeholder='Search...'></input>
        <span className='search-icon'>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

export default Header;
