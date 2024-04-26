// Insert.js
import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [formData, setFormData] = useState({
    eid: '',
    ename: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/insert', formData)
      .then(response => {
        console.log('Response from server:', response.data);
        window.alert('Insertion successful');

      
        window.location.href = `/display?id=${response.data.id}&name=${response.data.name}&salary=${response.data.salary}`;
      })
      .catch(error => {
        console.error('Error while saving employee:', error);
        window.alert('Insertion unsuccessful');
      });
  };

  return (
    <section>
      <div>
      <form className='inser' onSubmit={handleSubmit}>
        <label htmlFor="eid">Emp ID</label>
        <input className='id' type="number" name="eid" value={formData.eid} onChange={handleChange} placeholder='Enter Emp ID' /><br />
        <label htmlFor="ename">Emp Name</label>
        <input type="text" name="ename" value={formData.ename} onChange={handleChange} placeholder='Enter Emp Name' /> <br />
        <label htmlFor="salary">Emp Salary</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder='Enter Emp Salary' /><br />
        <button type="submit">Submit</button>
</form>

      </div>
    </section>
  );
};

export default Insert;
