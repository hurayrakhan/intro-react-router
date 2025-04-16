import React, { use } from 'react';
import User from './User';

const Users = ({usersPromise}) => {

    const userData = use(usersPromise)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-7 '>
            {
                userData.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;