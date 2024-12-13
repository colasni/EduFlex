import React from "react";
import useFetchRecipes from '../hooks/useFetchCourses';

const Home: React.FC = () => {
    const {loading} = useFetchRecipes();

    if (loading) return <p>Loading...</p>;

    return (
        <div className = "home">
            <h1>Bienvenido Administrador</h1>

            <p>Nos complace presentarte la versión inicial de nuestra Plataforma de Gestión de Cursos.
                Actualmente, puedes listar los cursos existentes y agregar nuevos de manera sencilla.
                Estamos trabajando para incorporar próximamente las funcionalidades de eliminar y modificar
                cursos, con el objetivo de ofrecerte una herramienta más completa y eficiente.</p>
        </div>
    )
}

export default Home;