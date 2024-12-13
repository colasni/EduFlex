import React, { useState } from 'react';
//import axios from 'axios';
import apiClient from '../utils/api'

const AddCourse: React.FC = () => {
    const [formData, setFormData] = useState({
        courseName: '',
        category: '',
        price: 0,
        description: '',
        image: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        await apiClient.post('/api/Course', formData);
        alert('Course added successfully');
        } catch (error) {
        alert('Error adding Course');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setFormData({ ...formData, courseName: e.target.value })} />
        <input type="text" placeholder="Category" onChange={e => setFormData({ ...formData, category: e.target.value })} />
        <input type="number" placeholder="Price" onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })} />
        <textarea placeholder="description" onChange={e => setFormData({ ...formData, description: e.target.value })} />
        <input type="text" placeholder="Image URL" onChange={e => setFormData({ ...formData, image: e.target.value })} />
        <button type="submit">Add Course</button>
        </form>
    );
};

export default AddCourse;

