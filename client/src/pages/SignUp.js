import React, { useContext } from 'react'
import {  useState } from 'react';
import "./css/Login.css"
import axios from 'axios';
import { EnglishContext } from '../context/EnglishContext';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)

    let navigate = useNavigate();
    const {user, setUser} = useContext(EnglishContext)

    
    function handleSignup(e){
        e.preventDefault(); 
        setError(null)
        axios.post('http://localhost:5000/students/signup', {email, password})
        .then(res =>  {
            setUser(res.data); 
            localStorage.setItem('user', JSON.stringify(res.data))
            console.log(user)
            navigate("/home")
        })

        .catch(({response}) => {
            setError(response.data)
        })
        setEmail("")
        setPassword("")
    }


    

    return (
        <div className='container-fluid login-main d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-lg-9 m-5 text-center'>
                    <h1 className='titlesign'>SIGN UP</h1>
                            <form onSubmit={handleSignup}>
                                {error && <p className='alert alert-danger'>{error}</p>}
                                <div class="form-outline mb-4">
                                    <input type="email" id="loginName" class="form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                                    <label class="form-label" for="loginName">Email or username</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" id="loginPassword" class="form-control-lg" value={password} onChange={(e)=> setPassword(e.target.value)} />
                                    <label class="form-label" for="loginPassword">Password</label>
                                </div>
                                <div className='signorback-login'>
                                <button type="submit" class="btn btn-primary btn-outline mb-4 sign-in ">Sign Up</button>
                                <p style={{fontSize:"30px"}}>OR</p>
                                <button type="submit" class="btn btn-primary  mb-4 sign-in back-login" onClick={()=> navigate("/")}>Back Login</button>
                                </div>
                            </form>
                </div>
            </div>
        </div>


    )
}
