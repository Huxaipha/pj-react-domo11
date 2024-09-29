import React from "react";
import location from '../../assets/image/location.svg';
import phone from '../../assets/image/phone.svg';
import time from '../../assets/image/time.svg';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
      <div className="bg-white shadow-md flex flex-col w-full max-w-6xl">
        
        {/* Heading and Paragraph */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 text-sm">
            For more information about our product & services, please feel free to drop us <br/> An email. 
            Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        {/* Contact Info and Form - Two Columns */}
        <div className="flex flex-col md:flex-row w-full">
          
          {/* Left Section: Address, Phone, Working Time */}
          <div className="w-full md:w-1/3 p-8 bg-white text-black">
            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <img className="w-6 h-6" src={location} alt="Location icon" />
                <div>
                  <h2 className="text-xl font-bold text-start mb-2">Address</h2>
                  <p className="text-sm text-start">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <img className="w-6 h-6" src={phone} alt="Phone icon" />
                <div>
                  <h2 className="text-xl font-bold text-start mb-2">Phone</h2>
                  <p className="text-sm text-start">Mobile: +(84) 546-6789</p>
                  <p className="text-sm text-start">Hotline: +(84) 456-6789</p>
                </div>
              </div>
            </div>

            {/* Working Time */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <img className="w-6 h-6" src={time} alt="Time icon" />
                <div>
                  <h2 className="text-xl font-bold text-start mb-2">Working Time</h2>
                  <p className="text-sm text-start">Monday-Friday: 9:00-22:00</p>
                  <p>Saturday-Sunday: 9:00-21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full md:w-2/3 p-8">
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Abc"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Hi! I'd like to ask about"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-[237px] bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
