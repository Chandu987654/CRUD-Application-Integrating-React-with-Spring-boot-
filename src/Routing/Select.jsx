// Reply.js
import React, { useState } from 'react';
import axios from 'axios';

const Reply = () => {
  const [employees, setEmployees] = useState([]);

  const handleButtonClick = () => {
    axios.get('http://localhost:8082/employees')
      .then(response => {
        console.log('Response from server:', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error while fetching employees:', error);
      });
  };

  return (
    <section>
      <div className='sel'>
        <h2>Employees List</h2>
        <button onClick={handleButtonClick}>Show Details</button>
        <ul>
          {employees.map(employee => (
            <li key={employee.eid}>
              {employee.eid} - {employee.ename} - {employee.salary}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reply;
