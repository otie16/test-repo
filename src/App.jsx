import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ServiceRequest from './pages/ServiceRequest';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <AuthProvider>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        <Route path="/service-request" element={<ServiceRequest/>}/>
      </Routes>
    <Footer />
    </AuthProvider>
    </>
  );
};

export default App;