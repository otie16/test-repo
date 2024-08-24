import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from './authSlice';
import backgroundImage from '../assets/bg-image.jpg'
import { Link } from 'react-router-dom';
const Register = () => {
//   const dispatch = useDispatch();

  // Individual state for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

 

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const formData = {    
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        username,
        email,
        password,
        password2: confirmPassword,
    }

    console.log('Form submitted:', formData);
    

    // Dispatch the registerUser action with the form data
    // dispatch(registerUser({
    //   first_name: firstName,
    //   last_name: lastName,
    //   middle_name: middleName,
    //   email,
    //   password,
    //   address,
    // }));
  };
 
  

  return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-3">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="first_name">
                First Name
            </label>
            <input
                type="text"
                name="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
                required
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="last_name">
                Last Name
            </label>
            <input
                type="text"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
                required
            />
            </div>

            <div className="mb-4"> 
            <label className="block text-sm font-medium mb-2" htmlFor="middle_name">
                Middle Name
            </label>
            <input
                type="text"
                name="middle_name"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
            />
            </div>
            
            <div className="mb-4"> 
            <label className="block text-sm font-medium mb-2" htmlFor="username">
                Username
            </label>
            <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
                required
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
                required
            />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="confirm password">
                confirm password
            </label>
            <input
                type="password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
                required
            />
            </div>

            <button type="submit" className="w-full bg-red-500 text-white py-4 px-4 rounded-lg hover:bg-red-600">
            Register
            </button>

            <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className='text-blue-700'>Login</Link>
        </p>
        </form>
        </div>
  );
};

export default Register;
