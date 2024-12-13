import React, { useState } from 'react';
//import axios from 'axios';
import apiClient from '../utils/api'


const RegisterUser: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        direccion: '',
    });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await apiClient.post('/api/users/register', formData);
        alert('User was successfully added');
        } catch (error) {
        alert('Error adding a user');
        }
    };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={e => setFormData({ ...formData, username: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="direcion" onChange={e => setFormData({ ...formData, direccion: e.target.value })} />
      <button type="submit">Add User</button>
    </form>
  );
};


export default RegisterUser;
