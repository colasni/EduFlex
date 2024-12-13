import React from "react";
interface UserCardProps {
    username: string;
    email: string;
    direccion: string;
}

const UserCard: React.FC<UserCardProps> = ({username, email, direccion}) => {
    return(
        <div className="user-card">
            <h3>{username}</h3>
            <p>{email}</p>
            <p>{direccion}</p>
        </div>
    )
}

export default UserCard;