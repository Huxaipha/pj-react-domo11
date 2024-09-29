import React from 'react';
import backgroundImage from '../../assets/image/Rectangle 1.png'; // Adjust path based on your folder structure
import Features from '../features/Features';
import Cartfooter from './Cartfooter';
import { useNavigate } from 'react-router-dom'; // Use this if you are using react-router-dom for navigation

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate(); // If you want to navigate to checkout

  if (cart.length === 0) {
    return (
      <div 
        className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-3xl font-bold text-black mb-2">Cart</h1>
        <div className="text-sm text-black flex space-x-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>{'>'}</span>
          <span className="font-semibold">Cart</span>
        </div>
        <div className="flex items-center justify-center h-full">
          <h2 className="text-2xl font-bold">Your cart is empty!</h2>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart } }); // Pass cart to the Checkout component
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0); // Ensure price is used directly
  };

  return (
    <>
      <div 
        className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-3xl font-bold text-black mb-2">Cart</h1>
        <div className="text-sm text-black flex space-x-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>{'>'}</span>
          <span className="font-semibold">Cart</span>
        </div>
      </div>

      {/* Cart Table and Totals Section */}
      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Cart Table */}
        <div className="col-span-2">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-[#f9f3ee] text-left">
                <th className="p-4 text-black">Product</th>
                <th className="p-4 text-black">Price</th>
                <th className="p-4 text-black">Quantity</th>
                <th className="p-4 text-black">Subtotal</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded mr-4" />
                    <span className="text-gray-500">{item.name}</span>
                  </td>
                  <td className="p-4 text-gray-500">{item.price} Rs</td>
                  <td className="p-4">
                    <input 
                      type="number" 
                      defaultValue={item.quantity} 
                      min="1" 
                      className="border w-12 p-2 text-center" 
                      onChange={(e) => item.quantity = Math.max(1, e.target.value)} // Update quantity directly
                    />
                  </td>
                  <td className="p-4 text-gray-500">
                    {item.price * item.quantity} Rs
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      {/* Remove Button Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="bg-[#fbf7f2] p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="mb-4 flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-500">{calculateSubtotal()} Rs</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span className="font-bold text-black">Total</span>
            <span className="text-yellow-500 font-bold">{calculateSubtotal()} Rs</span>
          </div>
          <button
            onClick={handleCheckout} // Navigate to checkout and pass cart
            className="bg-white text-black border-2 border-black py-2 px-4 w-full rounded-lg font-bold hover:bg-gray-100"
          >
            Check Out
          </button>
        </div>
      </div>

      <Features />
      <Cartfooter />
    </>
  );
};

export default Cart;
