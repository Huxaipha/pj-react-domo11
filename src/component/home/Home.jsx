import React from 'react';
import Firstpart from '../first part/Firstpart';
import Product from '../Product/Product';
import Rooms from '../rooms/Rooms';
import Furniture from '../furnitures/Furniture';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section with Background and Promotional Text */}
      <div className="relative w-full h-screen flex items-center justify-end pr-8 pb-2">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dfo4alc3w/image/upload/v1725724597/scandinavian-interior-mockup-wall-decal-background_1_mgfvfd.png" alt="Room background" className="w-full h-full object-cover" />
        </div>
        
        {/* Text Content Container */}
        <div className="relative max-w-lg p-8 bg-yellow-100 text-center z-10">
          <h2 className="text-lg uppercase font-semibold text-yellow-800">New Arrival</h2>
          <h1 className="text-4xl font-bold text-yellow-800 my-4">Discover Our New Collection</h1>
          <p className="mb-6 text-yellow-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white font-bold py-3 px-8 rounded">Buy Now</button>
        </div>
      </div>

      {/* Including additional components */}
      <Firstpart />  
      <Product />     
      <Rooms />        
      <Furniture />   
      <Footer />          
      </div>
  );
};

export default Home;
