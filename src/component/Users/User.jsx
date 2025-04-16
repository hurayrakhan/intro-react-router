import React from 'react';

const User = ({user}) => {
    const {name, username, email} = user;
    return (
        
            <div className='border-2 border-blue-400 rounded-xl p-6'>
            <h3 className='text-xl font-medium'>Name : {name}</h3>
            <h5>Username : {username} </h5>
            <h5>Email : {email}</h5>
        </div>
        
    );
};

export default User;