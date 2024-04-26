import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [id, setId] = useState(null); // Use null as initial state for numeric IDs

  const handleDelete = () => {
    axios.delete(`http://localhost:8082/delete/${id}`)
      .then(response => {
        console.log('Response from server:', response.data);
        window.alert('Deletion successful');
      })
      .catch(error => {
        console.error('Error while deleting employee:', error);
        window.alert('Deletion unsuccessful');
      });
  };

  return (
    <section>
      <div className='del'>
        Emp ID <input className='idd' type="number" value={id || ''} onChange={(e) => setId(parseInt(e.target.value))} placeholder='ID' /><br />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </section>
  );
};

export default Delete;
