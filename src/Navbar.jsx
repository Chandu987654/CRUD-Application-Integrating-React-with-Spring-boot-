import React from 'react';

function Navbar({ onNavClick }) {
  return (
    <nav>
      <div className='text'><h1>CRUD Application </h1></div>
      <div className='btn'>
        <button onClick={() => onNavClick('insert')}>Insert</button>
        <button onClick={() => onNavClick('delete')}>Delete</button>
        <button onClick={() => onNavClick('update')}>Update</button>
        <button onClick={() => onNavClick('select')}>Select</button>
      </div>
    </nav>
  );
}

export default Navbar;
