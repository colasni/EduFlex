import React from "react";
import RecipeCard from "../components/CourseCard";
import useFetchCourses from '../hooks/useFetchCourses';

const Courses: React.FC = () => {
    const {courses, loading} = useFetchCourses();

    if (loading) return <p>Loading recipes...</p>;

    return (
        <div className = "home">
            {courses.map((course) => (
                <RecipeCard key={course._id} course={course} />
            ))}
        </div>
    )
}

export default Courses;