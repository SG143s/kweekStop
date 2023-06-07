import './Register.css';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Register = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (password !== rePassword) {
        alert('Passwords do not match');
        return;
      }
  
      try {
        const response = await fetch('/api/auth/registrasi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            username,
            password,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Registration successful:', data);
          // Perform any necessary actions after successful registration
          router.push('/login'); // Redirect to the home page
        } else {
          const errorData = await response.json();
          console.error('Registration failed:', errorData.error);
          // Handle registration error
        }
      } catch (error) {
        console.error('An error occurred during registration:', error);
        // Handle registration error
      }
    };


    return (
        <div className="register-page">
            <div className="register-header">
                <div className='register-header-container'>
                    <p className="header">Sign Up</p>
                    <div className="input-register">
                        {/* <form>
                            <label><p>Your name</p>
                                <input type="text" name="name" placeholder="First and last name" />
                            </label>
                            <label><p>Mobile number or email </p>
                                <input type="text" name="username" placeholder="First and last name" />
                            </label>
                            <label><p>Password</p>
                                <input type="text" name="password" placeholder="At least 6 characters" />
                            </label>
                            <p className='password-notes'>Passwords must be at least 6 characters.</p>
                            <label><p>Re-enter password</p>
                                <input type="text" name="password" placeholder="At least 6 characters" />
                            </label>
                                <button className="register-button">Continue</button>
                        </form> */}
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Your name</p>
                                <input
                                type="text"
                                name="name"
                                placeholder="First and last name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>
                                <p>username</p>
                                <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            <label>
                                <p>Password</p>
                                <input
                                type="password"
                                name="password"
                                placeholder="At least 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                            <p className="password-notes">Passwords must be at least 6 characters.</p>
                            <label>
                                <p>Re-enter password</p>
                                <input
                                type="password"
                                name="rePassword"
                                placeholder="Re-enter password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                                />
                            </label>
                            <button type="submit" className="register-button">
                                Continue
                            </button>
                            </form>
                    </div>
                    <div className="detail">
                        <p>By creating an account, you agree to Kweekstop’s <a>Conditions of Use </a> and <a>Privacy Notice.</a></p>
                    </div>
                    <div className="have-account">
                        <p>Already have an account? <a href='http://localhost:3000/login'>Log in</a></p>
                    </div>
                </div>
            </div>
            <div className="register-footer">
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

export default Register;