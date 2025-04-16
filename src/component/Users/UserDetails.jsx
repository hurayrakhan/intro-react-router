import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const data = useLoaderData();

    console.log(data)

    // const {name,email,username,address,phone,website,company} = data;

    return (
        <div className='border-2 border-blue-400 rounded-xl p-6'>
            this is user details.
        </div>
    );
};

export default UserDetails;