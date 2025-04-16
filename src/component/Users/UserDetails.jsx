import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const data = useLoaderData();

    console.log(data)

    const { name, email, username, address, phone, website, company } = data;
    
    const {street,suite,city,zipcode} = address;

    return (

        <div className=' border-2 border-blue-400 rounded-xl py-6 ml-72 w-md mt-24'>
            <h3 className='text-center text-xl font-medium pb-4'>{name}</h3>
            <div className='border-t-2 border-blue-400 rounded-xl p-6'>
                <p className='py-2'>Username : @{username}</p>
                <p className=''>Email : {email}</p>
                <p className='py-2'>Website : {website}</p>
                <p className=''>Phone : {phone}</p>
                <p className='py-2'>Company : {company.name} </p>
                <p className='pb-2 text-md font-medium'>Address :</p>
                <ul>
                    <li className='ml-7'>Street : {street}</li>
                    <li className='ml-7'>Suite : {suite}</li>
                    <li className='ml-7'>City : {city}</li>
                    <li className='ml-7'>Zipcode : {zipcode}</li>
                </ul>
            </div>
        </div>

    );
};

export default UserDetails;