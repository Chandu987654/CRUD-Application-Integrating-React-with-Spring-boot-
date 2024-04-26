// App.js
import React, { useState } from 'react';
import './App.css';
import Insert from './Routing/Insert';
import Delete from './Routing/Delete';
import Update from './Routing/Update';
import Select from './Routing/Select';
import Navbar from './Navbar';


function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      {currentPage === 'insert' && <Insert />}
      {currentPage === 'delete' && <Delete />}
      {currentPage === 'update' && <Update />}
      {currentPage === 'select' && <Select />}
    </div>
  );
}

export default App;
