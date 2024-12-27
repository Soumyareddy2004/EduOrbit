import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submit

    const userData = {
      email: email,
      password: password,
    };

   

    try {
      const response = await fetch(
        `https://eduorbit-backend.onrender.com/user/${isSignup ? 'register' : 'login'}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      

      if (response.ok) {
        if (isSignup) {
          alert(`Account created for ${email}`);
          navigate('/login'); // Redirect to login after successful signup
        } else {
          localStorage.setItem('token', data.token); // Store token in localStorage
          alert('Login successful');
          navigate('/home'); // Redirect to home after successful login
        }
      } else {
        alert(data.message || (isSignup ? 'Signup failed' : 'Invalid login credentials'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <>
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form">
          <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
          </form>
          <p onClick={handleToggle} className="toggle-link">
            {isSignup ? 'Already have an account? Log In' : "Don’t have an account? Sign Up"}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
