import React from 'react';
import { useUserAuth } from '../Context/UserAuthContext';

const Home = () => {
    const {user, logOut} = useUserAuth();
    const handleLogout = async () => {
        try{
            await logOut();
        }catch(e){
            console.log(e.message);
        }
    }
    return (
        <div>
            <h2>User Mail : {user.email}</h2>
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
        </div>
    );
};

export default Home;