import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundImage from '../../assets/image/Rectangle 1.png'; // Adjust this path based on your folder structure
import Contactform from '../contact/Contactform';
import Contacteatures from './Contactfeatures';
import Contactfooter from './Contactfooter';

const Contact = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <>
      {/* Header Section */}
      <div 
        className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Contact Title */}
        <h1 className="text-3xl font-bold text-black mb-2">Contact</h1>

        {/* Breadcrumb Navigation */}
        <div className="text-sm text-black flex space-x-2">
          <span 
            className="hover:underline cursor-pointer" 
            onClick={() => navigate('/')}  // Navigate to home page when clicked
          >
            Home
          </span>
          <span>{'>'}</span>
          <span className="font-semibold">Contact</span>
        </div>
      </div>

      {/* Contact Form and Features */}
      <Contactform />
      <Contacteatures />
      <Contactfooter />
    </>
  );
};

export default Contact;
