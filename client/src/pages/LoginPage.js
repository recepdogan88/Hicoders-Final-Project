import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/Login.css"
import axios from 'axios';
import { EnglishContext } from '../context/EnglishContext';
import { useContext } from 'react'

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user,setUser} = useContext(EnglishContext)
    const [error,setError]=useState("")

    function handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/students/login', {email, password})
             .then(res => {
                setUser(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))}
                ) 
            .catch(e => setError(e.response.data))
            setEmail("")
            setPassword("")
      }

    
   if(user){
    console.log(user)
   }
   
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
        <div className='row'>
            <div className='col-lg-9 m-5 text-center'>
                <h1 className='titleLogin'>LOGIN PAGE</h1>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form onSubmit={handleLogin}>
                        {error && <p className='alert alert-danger'>{error}</p>}
                            <div class="form-outline mb-4">
                                <input type="email" id="loginName" class="form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label class="form-label" for="loginName">Email or username</label>
                            </div>
                            <div class="form-outline mb-4">
                                <input type="password" id="loginPassword" class="form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label class="form-label" for="loginPassword">Password</label>
                            </div>
                            <div className='d-flex flex-column login-sign-div'>
                                <button type="submit" class="btn btn-primary btn-outline mb-4 sign-in">Log in</button>
                                <p>OR</p>
                                <Link to="/signup" className='register-link'>
                                    REGISTER
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         </div>
       
       
    )
}
/*
 <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-lg-9 m-5 text-center'>
                    <h1 className='titleLogin'>LOGIN PAGE</h1>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form onSubmit={handleLogin}>
                            {error && <p className='alert alert-danger'>{error}</p>}
                                <div class="form-outline mb-4">
                                    <input type="email" id="loginName" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label class="form-label" for="loginName">Email or username</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" id="loginPassword" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label class="form-label" for="loginPassword">Password</label>
                                </div>
                                <div className='d-flex flex-column login-sign-div'>
                                    <button type="submit" class="btn btn-primary btn-outline mb-4 sign-in">Log in</button>
                                    <p>OR</p>
                                    <Link to="/signup" className='register-link'>
                                        REGISTER
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
             </div>
*/