import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../../assets/image/Rectangle 1.png'; // Adjust the path as needed
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Features from '../features/Features'; // Adjust the import path if necessary
import Footer from '../footer/Footer'; // Adjust the import path if necessary

// Form Validation Schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  companyName: Yup.string(),
  country: Yup.string().required('Country is required'),
  streetAddress: Yup.string().required('Street address is required'),
  city: Yup.string().required('City is required'),
  province: Yup.string().required('Province is required'),
  zipCode: Yup.string().required('ZIP code is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const Checkout = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation();
  const { cart } = location.state || { cart: [] }; // Retrieve cart from location state

  const initialValues = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    city: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  };

  // Calculate total price based on the passed cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div>
        {/* Header Section */}
        <div 
          className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-3xl font-bold text-black mb-2">Checkout</h1>
            <div className="text-sm text-black flex space-x-2">
              <span 
                className="hover:underline cursor-pointer"
                onClick={() => navigate('/')} // Navigate to home page when clicked
              >
                Home
              </span>
              <span>{'>'}</span>
              <span className="font-semibold">Checkout</span>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto my-10 p-4 flex flex-col lg:flex-row gap-10">
          {/* Left Side: Form */}
          <div className="flex-1 p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Billing details</h1>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Form data', values);
              }}
            >
              {() => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-start font-medium text-gray-700">First Name</label>
                      <Field
                        name="firstName"
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-start font-medium text-gray-700">Last Name</label>
                      <Field
                        name="lastName"
                        type="text"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm text-start font-medium text-gray-700">Company Name (Optional)</label>
                    <Field
                      name="companyName"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="country" className="block text-sm text-start font-medium text-gray-700">Country / Region</label>
                    <Field
                      as="select"
                      name="country"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Street Address */}
                  <div>
                    <label htmlFor="streetAddress" className="block text-sm text-start font-medium text-gray-700">Street Address</label>
                    <Field
                      name="streetAddress"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm text-start font-medium text-gray-700">Town / City</label>
                    <Field
                      name="city"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Province */}
                  <div>
                    <label htmlFor="province" className="block text-sm text-start font-medium text-gray-700">Province</label>
                    <Field
                      as="select"
                      name="province"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="Western Province">Western Province</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage name="province" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm text-start font-medium text-gray-700">ZIP code</label>
                    <Field
                      name="zipCode"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="zipCode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-start font-medium text-gray-700">Phone</label>
                    <Field
                      name="phone"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-start font-medium text-gray-700">Email Address</label>
                    <Field
                      name="email"
                      type="email"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm text-start font-medium text-gray-700">Additional Information</label>
                    <Field
                      name="additionalInfo"
                      as="textarea"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Additional information"
                    />
                    <ErrorMessage name="additionalInfo" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                </Form>
              )}
            </Formik>
          </div>

          {/* Right Side: Payment Details */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            {/* Product and Price Details */}
            <div className="mb-6">
              {/* Header with Product and Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-medium text-start text-black">Product</p>
                <span className="text-lg font-bold text-black">Subtotal</span>
              </div>

              {/* Product Details */}
              {cart.map(item => {
                const itemTotal = item.price * item.quantity; // Calculate total for each item
                return (
                  <div key={item.id} className="flex justify-between items-center border-b pb-4">
                    <span className="text-sm text-black">{item.name} x {item.quantity}</span>
                    <span className="text-sm text-end text-yellow-500">Rs. {itemTotal.toLocaleString()}</span> {/* Display item total */}
                  </div>
                );
              })}

              {/* Subtotal */}
              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-bold text-black">Subtotal</span>
                <span className="text-sm text-end text-yellow-500">Rs. {totalPrice.toLocaleString()}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center border-b pb-4 font-bold">
                <span className="text-sm text-black">Total</span>
                <span className="text-lg text-yellow-500">Rs. {totalPrice.toLocaleString()}</span> {/* Display total price */}
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="text-gray-600 text-start mb-6">
              <p>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4 mb-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="paymentMethod" className="form-radio h-4 w-4 text-black border-gray-300" />
                <span className="text-black font-medium">Direct Bank Transfer</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="radio" name="paymentMethod" className="form-radio h-4 w-4 text-black border-gray-300" />
                <span className="text-black font-medium">Cash On Delivery</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[318px] text-black border border-r-2 py-2 px-4 rounded-md hover:bg-gray-600 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </>
  );
};

export default Checkout;
