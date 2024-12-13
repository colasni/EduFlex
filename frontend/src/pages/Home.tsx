import React from "react";
import useFetchRecipes from '../hooks/useFetchCourses';

const Home: React.FC = () => {
    const {loading} = useFetchRecipes();

    if (loading) return <p>Loading recipes...</p>;

    return (
        <div className = "home">
            <h1>bienvenido administrador</h1>
        </div>
    )
}

export default Home;