import React from 'react';

const NavBar = ({ totalItems }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <span className='navbar-brand mb-0 h1'>Total items</span>
        <span className='badge bg-secondary'>{totalItems}</span>
      </div>
    </nav>
  );
};

export default NavBar;
