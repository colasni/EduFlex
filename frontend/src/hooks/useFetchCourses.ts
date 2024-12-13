import { useState, useEffect } from 'react';
import apiClient from '../utils/api'


interface Course {
    _id: string;
    courseName: string; 
    category: string;
    price:  number;
    description: string;
    image?: string;
}


const useFetchCourses = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchCourses = async () => {
        try {
            const response = await apiClient.get('/api/Course');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        } finally {
            setLoading(false);
        }
    };


    fetchCourses();
}, []);


    return { courses, loading };
};


export default useFetchCourses;
