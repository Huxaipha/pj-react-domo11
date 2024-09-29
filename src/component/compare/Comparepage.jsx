import React from 'react';
import Comparedetails from '../compare/Comparedetails';
import Features from '../features/Features';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundImage from '../../assets/image/Rectangle 1.png'; // Ensure this path is correct

// Importing product images directly or use public folder URL
import AsofaImage from '../../assets/image/Asofa3.png';
import OutdoorImage from '../../assets/image/Outdoor.png';

// Function to generate example product data
const getProducts = () => {
  return [
    {
      id: 1,
      name: 'Asgaard Sofa',
      image: AsofaImage, // Use imported image
      rating: 4.7,
      reviews: 204,
      price: 'Rs. 250,000.00',
    },
    {
      id: 2,
      name: 'Outdoor Sofa Set',
      image: OutdoorImage, // Use imported image
      rating: 4.2,
      reviews: 145,
      price: 'Rs. 224,000.00',
    },
  ];
};

// ProductCard Component to display product information
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg text-left">
      <img src={product.image} alt={product.name} className="h-40 w-64 object-contain mb-2" />
      <div className="text-lg font-semibold">{product.name}</div>
      <div className="text-md font-semibold">{product.price}</div>
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c1.003 0 1.422 1.225.686 1.867l-2.802 1.953a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.541 1.118L10 13.011l-2.792 1.946c-.786.565-1.841-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.57 8.776c-.736-.642-.317-1.867.686-1.867h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({product.reviews} Reviews)</span>
      </div>
    </div>
  );
};

const Comparepage = () => {
  const products = getProducts(); // Available products
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <>
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-3xl font-bold text-black mb-2">Product Comparison</h1>
        <div className="text-sm text-black flex space-x-2">
          <span 
            className="hover:underline cursor-pointer" 
            onClick={() => navigate('/')}  // Navigate to the home page on click
          >
            Home
          </span>
          <span>{'>'}</span>
          <span className="font-semibold">Product Comparison</span>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-3 gap-4 p-6">
        {/* Left Section - Go to Product page */}
        <div className="bg-white p-6">
          <div className="mb-4 text-xl text-start font-bold">
            Go to Product <br /> page for more <br />Products
          </div>
          <div className="flex justify-start">
            <button className="underline text-start text-black py-2 px-4 rounded hover:bg-yellow-600">
              View More
            </button>
          </div>
        </div>

        {/* Center Section - Product Images and Details */}
        <div className="flex flex-row space-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Right Section - Add a Product */}
        <div className="flex flex-col justify-start items-end">
          <div className="relative bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-2">Add A Product</h2>
            <select className="block appearance-none w-full bg-yellow-500 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-600 hover:bg-yellow-600 cursor-pointer">
              <option>Choose a Product</option>
              {products.map((product) => (
                <option key={product.id}>{product.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Footer Components */}
      <Comparedetails />
      <Features />
      <Footer />
    </>
  );
};

export default Comparepage;






// import React, { useState } from 'react';
// import Comparedetails from '../compare/Comparedetails';
// import Features from '../features/Features';
// import Footer from '../footer/Footer';
// import backgroundImage from '../../assets/image/Rectangle 1.png'; // Ensure this path is correct

// // Importing product images directly or use public folder URL
// import AsofaImage from '../../assets/image/Asofa3.png';
// import OutdoorImage from '../../assets/image/Outdoor.png';

// // Function to generate example product data
// const getProducts = () => {
//   return [
//     {
//       id: 1,
//       name: 'Asgaard Sofa',
//       image: AsofaImage, // Use imported image
//       rating: 4.7,
//       reviews: 204,
//       price: 'Rs. 250,000.00',
//     },
//     {
//       id: 2,
//       name: 'Outdoor Sofa Set',
//       image: OutdoorImage, // Use imported image
//       rating: 4.2,
//       reviews: 145,
//       price: 'Rs. 224,000.00',
//     },
//   ];
// };

// // ProductCard Component to display product information (no compare button)
// const ProductCard = ({ product }) => {
//   return (
//     <div className="border rounded-lg p-4 bg-white shadow-lg text-left"> {/* Ensure text is aligned to the left */}
//       <img src={product.image} alt={product.name} className="h-40 w-64 object-contain mb-2" />
//       <div className="text-lg font-semibold">{product.name}</div>
//       <div className="text-md font-semibold">{product.price}</div>
//       <div className="flex items-center">
//         {Array.from({ length: 5 }, (_, i) => (
//           <svg
//             key={i}
//             className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c1.003 0 1.422 1.225.686 1.867l-2.802 1.953a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.541 1.118L10 13.011l-2.792 1.946c-.786.565-1.841-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.57 8.776c-.736-.642-.317-1.867.686-1.867h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//           </svg>
//         ))}
//         <span className="ml-2 text-sm text-gray-600">({product.reviews} Reviews)</span>
//       </div>
//     </div>
//   );
// };

// const Comparepage = () => {
//   const products = getProducts(); // Available products

//   return (
//     <>
//       {/* Header Section */}
//       <div
//         className="w-full bg-cover bg-center h-64 flex flex-col justify-center items-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <h1 className="text-3xl font-bold text-black mb-2">Product Comparison</h1>
//         <div className="text-sm text-black flex space-x-2">
//           <span className="hover:underline cursor-pointer">Home</span>
//           <span>{'>'}</span>
//           <span className="font-semibold">Product Comparison</span>
//         </div>
//       </div>

//       {/* Main Grid Layout */}
//       <div className="grid grid-cols-3 gap-4 p-6">
//         {/* Left Section - Go to Product page */}
//         <div className="bg-white p-6">
//   <div className="mb-4 text-xl text-start font-bold">
//     Go to Product <br /> page for more <br />Products
//   </div>
//   <div className="flex justify-start"> {/* Ensures button is aligned to the left */}
//     <button className="underline text-start text-black py-2 px-4 rounded hover:bg-yellow-600">
//       View More
//     </button>
//   </div>
// </div>

//         {/* Center Section - Product Images and Details (Horizontal Layout) */}
//         <div className="flex flex-row space-x-6"> {/* Align product cards side by side */}
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//             />
//           ))}
//         </div>

//         {/* Right Section - Add a Product */}
//         <div className="flex flex-col justify-start items-end">
//           <div className="relative bg-white p-6 shadow-lg rounded-lg">
//             <h2 className="text-xl font-bold mb-2">Add A Product</h2>
//             <select className="block appearance-none w-full bg-yellow-500 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-600 hover:bg-yellow-600 cursor-pointer">
//               <option>Choose a Product</option>
//               {products.map((product) => (
//                 <option key={product.id}>{product.name}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Footer Components */}
//       <Comparedetails />
//       <Features />
//       <Footer />
//     </>
//   );
// };

// export default Comparepage;
