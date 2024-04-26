// Update.js
import React, { useState } from 'react';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleUpdate = () => {
    axios.put(`http://localhost:8082/update/${id}`, { name })
      .then(response => {
        console.log('Response from server:', response.data);
        window.alert('Name update successful');
      })
      .catch(error => {
        console.error('Error while updating employee name:', error);
        window.alert('Name update unsuccessful');
      });
  };

  return (
    <section>
      <div className='upd'>
        <input className='id' type="number" value={id} onChange={(e) => setId(e.target.value)} placeholder='Emp ID' /><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='New Name' /><br />
        <button onClick={handleUpdate}>Update Name</button>
      </div>
    </section>
  );
};

export default Update;
