import React from 'react';
import support from '../assets/call-center.jpg';
import cloud from '../assets/cloud-image.jpg'
import network from '../assets/network_install.webp'


const LandingPage = () => {
  return (
    <div className="bg-white">
      <p>New Here</p>
      <h1>new heading</h1>
      {/* <header className="bg-red-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Phase3</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main className="container mx-auto py-16">
        <section className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Connecting You to the World</h2>
          <p className="text-gray-600 text-xl mb-8">Reliable and fast networking solutions tailored for your needs.</p>
          <a href="#services" className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 transition">Explore Services</a>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-40">
          <div className="bg-white rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <img src={network} alt="Service 1" className="mx-auto mb-6 rounded-t-lg"/>
            <div className='p-4 mb-4'>
            <h3 className="text-2xl font-bold mb-4">Networking Solutions</h3>
            <p className="text-gray-600 ">Custom network setups for businesses of all sizes.</p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <img src={cloud} alt="Service 2" className="mx-auto mb-6 rounded-t-lg"/>
            <div className='p-4 mb-4'>
            <h3 className="text-2xl font-bold mb-4">Cloud Integration</h3>
            <p className="text-gray-600">Seamless integration with cloud services.</p>
            </div>
          </div>
          <div className="bg-white  rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <img src={support} alt="Service 3" className="mx-auto mb-6 rounded-t-lg "/>
            <div className='p-4 mb-4'>
            <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Always there when you need us the most.</p>
            </div>
          </div>
        </section>

        <section id="about" className="text-center py-16">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6">About Phase3 Telecom</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At Phase3 Telecom, we specialize in providing cutting-edge networking solutions that keep your business connected and running smoothly.
          </p>
        </section>
        <section id="contact" className="bg-red-600 text-white py-16 text-center">
          <h3 className="text-4xl font-extrabold mb-6">Get in Touch</h3>
          <p className="mb-6">Need assistance? Reach out to us today!</p>
          <a href="mailto:contact@networkco.com" className="bg-white text-red-600 py-3 px-8 rounded-full hover:bg-gray-200 transition">Contact Us</a>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
