import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceRequest from './components/ServiceRequest';
import LandingPage from './components/LandingPage';
import Navbar from './components/NavBar';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    
    <Navbar/> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/service-request" element={<ServiceRequest/>}/>
      </Routes>
    <Footer />
    </>
  );
};

export default App;