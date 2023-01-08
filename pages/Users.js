import React from 'react';

const Users = ({ user }) => {
    return (
        <div>
            <p> {user.name}</p>
            <hr />
            <p>{user.email}</p>
        </div>
    );
};

export default Users;