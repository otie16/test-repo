import React, { useState } from 'react';
import backgroundImage from '../assets/bg-image.jpg'

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    existingNetwork: '',
    urgency: '',
    location: '',
    numberOfDevices: '',
    networkDevices: '',
    networkSize: '',
    problemDescription: '',
    preferredContactTime: '',
    budget: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center opacity-80" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-4 mb-4 ">
      <h2 className="text-3xl font-bold text-center mb-8">Service Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            >
              <option value="">Select Service Type</option>
              <option value="network-installation">Network Installation</option>
              <option value="network-maintenance">Network Maintenance</option>
              <option value="network-security-assessment">Network Security Assessment</option>
              <option value="cloud-integration">Cloud Integration</option>
              <option value="voip-setup">VoIP Setup</option>
              <option value="wireless-networking">Wireless Networking</option>
              <option value="data-backup-recovery">Data Backup and Recovery</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Existing Network Infrastructure</label>
            <select
              name="existingNetwork"
              value={formData.existingNetwork}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            >
              <option value="">Select Network Infrastructure</option>
              <option value="wired-network">Wired Network</option>
              <option value="wireless-network">Wireless Network</option>
              <option value="hybrid-network">Hybrid Network</option>
              <option value="no-existing-network">No Existing Network</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Service Urgency</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            >
              <option value="">Select Urgency</option>
              <option value="immediate">Immediate (Emergency)</option>
              <option value="1-2-days">Within 1-2 Days</option>
              <option value="1-week">Within 1 Week</option>
              <option value="flexible">Flexible (No Urgency)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Location of Service</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Number of Devices</label>
            <input
              type="number"
              name="numberOfDevices"
              value={formData.numberOfDevices}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Type of Network Devices</label>
            <input
              type="text"
              name="networkDevices"
              value={formData.networkDevices}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              placeholder="e.g., Routers, Switches, Firewalls"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Network Size</label>
            <select
              name="networkSize"
              value={formData.networkSize}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              required
            >
              <option value="">Select Network Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Problem Description</label>
            <textarea
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black-100 rounded-lg outline-none shadow-sm"
              rows="4"
              placeholder="Please describe the issue or service you need..."
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Preferred Contact Time</label>
            <input
              type="text"
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-100 rounded-lg outline-none shadow-sm"
              placeholder="e.g., Morning, Afternoon, Evening"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Budget Range (Optional)</label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-100 rounded-lg outline-none shadow-sm"
              placeholder="e.g., $500 - $1000"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I agree to the terms and conditions.
            </label>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 transition"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ServiceRequestForm;
