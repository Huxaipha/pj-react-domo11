import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <RecoilRoot>
 {/* <BrowserRouter> */}
 <App/>
 {/* </BrowserRouter> */}
 </RecoilRoot>
  </StrictMode>,
 
)


{/* <RecoilRoot>
<BrowserRouter>
  <App />
</BrowserRouter>
</RecoilRoot> */}

// import React, { useEffect, useState } from 'react';
// import ProductCard from './ProductCard'; // Import the ProductCard component
// import productData from './data/products.json'; // Import the product data from JSON

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);

//   // Load product data into state when the component mounts
//   useEffect(() => {
//     setProducts(productData.products);
//   }, []);

//   return (
//     <div className="py-16 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <div className="text-center mt-8">
//         <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;
// {
//   "products": [
//     {
//       "id": 1,
//       "name": "Syltherine",
//       "description": "Stylish cafe chair",
//       "price": "Rp 2,500,000",
//       "originalPrice": "Rp 3,500,000",
//       "discount": "30%",
//       "tagColor": "bg-red-500",
//       "image": "https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png"
//     },
//     {
//       "id": 2,
//       "name": "Leviosa",
//       "description": "Stylish cafe chair",
//       "price": "Rp 2,500,000",
//       "originalPrice": "",
//       "discount": "",
//       "tagColor": "",
//       "image": "https://via.placeholder.com/300x300"
//     },
//     {
//       "id": 3,
//       "name": "Lolito",
//       "description": "Luxury big sofa",
//       "price": "Rp 7,000,000",
//       "originalPrice": "Rp 14,000,000",
//       "discount": "50%",
//       "tagColor": "bg-pink-500",
//       "image": "https://via.placeholder.com/300x300"
//     },
//     {
//       "id": 4,
//       "name": "Respira",
//       "description": "Outdoor bar table and stool",
//       "price": "Rp 500,000",
//       "originalPrice": "",
//       "discount": "",
//       "tagColor": "bg-green-500",
//       "image": "https://via.placeholder.com/300x300"
//     }
//   ]
// }



// import React from 'react';

// const ShareSection = () => {
//   return (
//     <div className="bg-black text-white py-16">
//       <div className="container mx-auto text-center mb-12">
//         {/* Header text */}
//         <h2 className="text-4xl font-bold mb-4">Share your setup with</h2>
//         <h3 className="text-3xl font-semibold text-gray-200">#FuniroFurniture</h3>
//       </div>

//       {/* Image Grid (Masonry Layout) */}
//       <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
//         {/* First Column */}
//         <div className="space-y-4">
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x400?text=Image+1"
//             alt="Image 1"
//           />
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x200?text=Image+2"
//             alt="Image 2"
//           />
//         </div>

//         {/* Second Column */}
//         <div className="space-y-4">
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x300?text=Image+3"
//             alt="Image 3"
//           />
//         </div>

//         {/* Third Column */}
//         <div className="space-y-4">
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x500?text=Image+4"
//             alt="Image 4"
//           />
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x250?text=Image+5"
//             alt="Image 5"
//           />
//         </div>

//         {/* Fourth Column */}
//         <div className="space-y-4">
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x300?text=Image+6"
//             alt="Image 6"
//           />
//           <img
//             className="w-full h-auto object-cover rounded-lg"
//             src="https://via.placeholder.com/300x400?text=Image+7"
//             alt="Image 7"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShareSection;



// import React from 'react';
// import { Link } from 'react-router-dom';
// // import { useRecoilValue } from 'recoil'
// // import { cartAtom } from '../atoms/cart'

// // nav images
// import logo from "../../assets/image/logo.png";
// import firstl from "../../assets/image/firstl.svg";
// import search from "../../assets/image/search.svg";
// import favorite from "../../assets/image/favourite.svg"; // Ensure this matches your actual file name
// import cart from "../../assets/image/cart.svg";

// const Navbar = () => {
//     return (
//         <nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2x1'>
//             <div className='flex justify-between items-center px-8 py-4 '>
//                 <div className='flex items-center'>
//                     <img src={logo} alt="logo" className='w-12 h-12' />
//                     <span className='ml-2 text-lg font-bold'>Furniro</span>
//                 </div>
                
//                 <div className='flex items-center space-x-4'>
//                     <Link to="/" className='text-black hover:underline'>Home</Link>
//                     <Link to="/shop" className='text-black hover:underline'>Shop</Link>
//                     <Link to="/about" className='text-black hover:underline'>About</Link>
//                     <Link to="/contact" className='text-black hover:underline'>Contact</Link>
//                 </div>
//                 <div className='flex items-center space-x-4'>
//                     <img src={firstl} alt="firstl" className='w-6 h-6' />
//                     <img src={search} alt="search" className='w-6 h-6' />
//                     <img src={favorite} alt="favorite" className='w-6 h-6' />
//                     <img src={cart} alt="cart" className='w-6 h-6' />
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React from 'react';


// import React from 'react';
// import Computer from '../../assets/image/computer.png'

// const BlogPost = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
//       {/* Card Container */}
//       <div className="bg-white rounded-lg shadow-lg max-w-4xl">
        
//         {/* Image Section */}
//         <div className="relative">
//           <img 
//             src="{computer}" 
//             alt="Workspace" 
//             className="w-full h-auto rounded-t-lg"
//           />

//           {/* Meta Information */}
//           <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-2 px-4 rounded-b-lg flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <span className="flex items-center space-x-1">
//                 <i className="fas fa-user"></i>
//                 <p className="text-sm">Admin</p>
//               </span>
//               <span className="flex items-center space-x-1">
//                 <i className="fas fa-calendar"></i>
//                 <p className="text-sm">14 Oct 2022</p>
//               </span>
//               <span className="flex items-center space-x-1">
//                 <i className="fas fa-tag"></i>
//                 <p className="text-sm">Handmade</p>
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="p-6">
//           <p className="text-gray-600 text-base leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

// Main Section
//       <div className="min-h-screen bg-gray-100 py-10">
//         <div className="container mx-auto">
//           <h1 className="text-3xl font-bold mb-8 text-center">Compare Products</h1>

//           {/* Display available products */}
//           <div className="grid grid-cols-2 gap-6">
//             {products.map((product) => (
//               <div key={product.id} className="border rounded-lg p-6 bg-white shadow-lg">
//                 <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
//                 <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
//                 <div className="flex items-center justify-center mb-4">
//                   <div className="flex space-x-1 text-yellow-500">
//                     {[...Array(Math.round(product.rating))].map((_, index) => (
//                       <svg
//                         key={index}
//                         className="w-5 h-5 fill-current"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 18.26l-6.18 3.73 1.64-7.19L2 9.74l7.27-.61L12 2.5l2.73 6.63 7.27.61-5.46 5.06 1.64 7.19L12 18.26z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="text-gray-500 text-sm ml-2">{product.reviews} Reviews</span>
//                 </div>
//                 <p className="text-lg text-center font-semibold mb-4">{product.price}</p>
//                 <button
//                   onClick={() => handleAddToCompare(product)} // Add product to compare list on click
//                   className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                 >
//                   Compare
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Display compared products if any */}
//           {compareList.length > 0 && (
//             <div className="mt-10">
//               <h2 className="text-2xl font-semibold text-center">Products in Comparison</h2>
//               <div className="grid grid-cols-2 gap-6">
//                 {compareList.map((product) => (
//                   <div key={product.id} className="border rounded-lg p-6 bg-white shadow-lg">
//                     <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
//                     <h2 className="text-xl font-semibold mb-2 text-center">{product.name}</h2>
//                     <div className="flex items-center justify-center mb-4">
//                       <div className="flex space-x-1 text-yellow-500">
//                         {[...Array(Math.round(product.rating))].map((_, index) => (
//                           <svg
//                             key={index}
//                             className="w-5 h-5 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                           >
//                             <path d="M12 18.26l-6.18 3.73 1.64-7.19L2 9.74l7.27-.61L12 2.5l2.73 6.63 7.27.61-5.46 5.06 1.64 7.19L12 18.26z" />
//                           </svg>
//                         ))}
//                       </div>
//                       <span className="text-gray-500 text-sm ml-2">{product.reviews} Reviews</span>
//                     </div>
//                     <p className="text-lg text-center font-semibold mb-4">{product.price}</p>
//                     <button className="w-full py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
//                       Add To Cart
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>


// import React from 'react';

// const products = [
//   {
//     name: 'Asgaard Sofa',
//     price: 'Rs. 250,000.00',
//     rating: 4.7,
//     reviews: 204,
//     image: '/path/to/asgaard-sofa.png', // Replace with your actual image path
//   },
//   {
//     name: 'Outdoor Sofa Set',
//     price: 'Rs. 224,000.00',
//     rating: 4.2,
//     reviews: 145,
//     image: '/path/to/outdoor-sofa.png', // Replace with your actual image path
//   }
// ];

// const ProductCard = ({ product }) => (
//   <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow">
//     <img src={product.image} alt={product.name} className="h-40 w-64 object-contain mb-2" />
//     <div className="text-lg font-semibold">{product.name}</div>
//     <div className="text-md font-semibold">{product.price}</div>
//     <div className="flex items-center">
//       {Array.from({ length: 5 }, (_, i) => (
//         <svg key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c1.003 0 1.422 1.225.686 1.867l-2.802 1.953a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.541 1.118L10 13.011l-2.792 1.946c-.786.565-1.841-.197-1.541-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.57 8.776c-.736-.642-.317-1.867.686-1.867h3.462a1 1 0 00.95-.69l1.07-3.292z" />
//         </svg>
//       ))}
//       <span className="ml-2 text-sm text-gray-600">({product.reviews} Reviews)</span>
//     </div>
//   </div>
// );

// const App = () => (
//   <div className="bg-gray-100 p-6">
//     <div className="mb-4 text-xl font-bold">Go to Product page for more Products</div>
//     <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">View More</button>
    
//     <div className="flex space-x-6 overflow-auto py-6">
//       {products.map(product => (
//         <ProductCard key={product.name} product={product} />
//       ))}
//     </div>

//     <div className="mt-4 flex justify-end">
//       <div className="relative">
//         <select className="block appearance-none w-full bg-yellow-500 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-yellow-600 hover:bg-yellow-600 cursor-pointer">
//           <option>Choose a Product</option>
//           {products.map(product => (
//             <option key={product.name}>{product.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   </div>
// );

// export default App;
