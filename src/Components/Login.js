import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, googleSignin } = useUserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googleSignin();
            navigate('/home');
        }catch(err){
            setError(err.message);
        }
    }   
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
            console.log(error);
        }
    }
    return (
        <div >
            <form className='mt-36'>
                <h2 className='text-3xl font-mono font-bold'>Welcome To SignIn Page</h2>
                <div className='mt-3 flex flex-col'>
                    <label>Enter Your Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Type here" className="mt-3 mx-auto input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='mt-3 flex flex-col'>
                    <label>Enter Your Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type here" className="mt-3 mx-auto input input-bordered input-primary w-full max-w-xs" />
                </div>
                <button onClick={handleLogin} className='mt-4 btn btn-primary'>Login</button>
                <button onClick={handleGoogleSignIn} className='btn ml-2 btn-outline'>Google</button>
            </form>
            <h2>Don't have any account ? <Link className='underline' to="/singup">SignUp</Link></h2>
        </div>
    );
};

export default Login;