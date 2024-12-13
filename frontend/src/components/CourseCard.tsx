import React from "react";

interface CourseCardProps{
    course: {
        courseName: string; 
        category: string;
        price:  number;
        description: string;
        image?: string;
    };
}

const CourseCard: React.FC<CourseCardProps> = ({course}) => {
    const{courseName, category, price, description, image} = course;

    return (
        <div className="recipe-card">
            <img src={image || 'default.png'} alt={courseName} />
            <h3>{courseName}</h3>
            <p><strong>Category:</strong> {category}</p>
            <p>price:{price}</p>
            <h4>description:</h4>
            <p>{description}</p>
        </div>
    );
};

export default  CourseCard;