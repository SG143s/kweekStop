import './Login.css';
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import axios from 'axios';
// import fetch from 'node-fetch';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [autherror, setAutherror] = useState(false);

    const { login } = useContext(AuthContext);
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send form data to API route
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      console.log(data);
      // Handle response from the API route accordingly
      if (response.ok) {
        // Login successful
        console.log(data);
        console.log('Login successful');
        setAutherror(false);
        login(data); // Call the login function from AuthContext
        router.push('/'); // Redirect to the home page
    } else {
        // Login failed
        console.error('Login failed:', data.error);
        setAutherror(true);
      }
    };   
    
    // const luname = username;
    // const lpass = password;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const res = await axios.post("http://localhost:8000/login", {
    //         luname,
    //         lpass,
    //       });
    //       console.log(Response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };


    return (
        <div className="login-page">
            <div className="login-header">
                <div className='login-header-container'>
                    <p className="header">Log in</p>
                    <div className="input-login">
                        <form onSubmit={handleSubmit}>
                            <label>
                            <p>Username</p>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            </label>
                            <label>
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                placeholder="at least 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            </label>
                            {autherror ? <p className='auth-failed'>Your username/password is incorrect.</p> : null}
                            <button type="submit" className="login-button">Continue</button>
                        </form>
                    </div>
                    <div className="detail">
                        <p>By creating an account, you agree to Kweekstop’s <a>Conditions of Use </a> and <a>Privacy Notice.</a></p>
                    </div>
                    <div className="have-account">
                        <p>New Customer? <a href='http://localhost:3000/register'>Sign up</a></p>
                    </div>
                </div>
            </div>
            <div className="login-footer">
                <hr></hr>
                <div className="help">
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div className="cr">
                    <p>© 2023 Hanna Faqih Nizma Dyandra Ariq Wawan </p>
                </div>
            </div>
        </div>
    )
};

export default Login;