import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const data = useLoaderData();

    console.log(data)

    const {name,email,username,address,phone,website,company} = data;

    return (
        <div className='border-2 border-blue-400 rounded-xl p-6'>
            <h3 className='text-center text-xl font-medium'>{name}</h3>
            <div>
                <p>@Username : {username}</p>
                <p>Email : {email}</p>
                <p>Website : {website}</p>
                <p>Phone : {phone}</p>
            </div>
        </div>
    );
};

export default UserDetails;