
import React, { useContext, useState } from 'react';
import backgroundImage from '../assets/bg-image.jpg'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

// import { useContext } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from './authSlice';

export default function Login() {

  const {loginUser} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const dispatch = useDispatch();
  const user = useContext(AuthContext)
    // console.log(email)
    const handleSubmit = async (e) => {
      e.preventDefault()

      email.length > 0 && loginUser(email, password)
      
      // dispatch(registerUser({ email, password }));
      setEmail('');
      setPassword('');
      // const submitted = useSelector((state) => state.auth.isRegistered);  // Check if user has been registered successfully
      // Redirect to dashboard or home page after successful login
      const formData = {
        email: email,
        password: password,
      }
        // isRegistered: submitted, // Passing the registration status from the store to the component
      // }
      // console.log(formData)
      // console.log("submitted")
     
    
  }
  user ? Navigate("/"):null

    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-3"> 
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border-b  border-gray-200 focus:outline-none focus:border-gray-200"
            required
          />
        </div>

        <button type="submit" className="w-full bg-red-500 text-white py-4 px-4 rounded-lg hover:bg-red-600">
          Login
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className='text-blue-700'>Register Now</Link>
        </p>
      </form>
    </div>
    )
}

