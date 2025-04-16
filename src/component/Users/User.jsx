import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const { name, username, email,id } = user;
   
    return (

        <div className='border-2 border-blue-400 rounded-xl pl-6 pt-6 pb-2'>
            <h3 className='text-xl font-medium py-2'>Name : {name}</h3>
            <h5>Username : {username} </h5>
            <h5>Email : {email}</h5>
            <Link to={`/users/${id}`} className='btn btn-soft mt-2'>User details</Link>
        </div>

    );
};

export default User;