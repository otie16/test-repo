import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from './authSlice';
import backgroundImage from '../assets/bg-image.jpg'

const Register = () => {
//   const dispatch = useDispatch();

  // Individual state for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

 

  const handleSubmit = (e) => {
    
    e.preventDefault();

    const formData = {    
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        email,
        password,
        address,
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
            <label className="block text-sm font-medium mb-2" htmlFor="address">
                Address
            </label>
            <textarea
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-gray-200"
            />
            </div>

            <button type="submit" className="w-full bg-red-500 text-white py-4 px-4 rounded-lg hover:bg-red-600">
            Register
            </button>
        </form>
        </div>
  );
};

export default Register;
