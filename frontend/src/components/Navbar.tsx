import  React  from "react";
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/">EduFlex</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/add-course">Add Course</Link>
            <Link to="/users">Users</Link>
            <Link to="/add-users">Add Users</Link>
        </nav>
    );
};

export default Navbar;