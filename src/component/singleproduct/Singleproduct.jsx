import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Group94 from '../../assets/image/Group94.png';
import Outdoor from '../../assets/image/Outdoor.png';
import Mask from '../../assets/image/Mask.png';
import Maskgroup from '../../assets/image/Maskgroup.png';
import facebook from '../../assets/image/facebook.svg';
import inn from '../../assets/image/inn.svg';
import twitter from '../../assets/image/twitter.svg';
import Singlep from './Singlep';
import Relatedproduct from '../../component/singleproduct/Relatedproduct';
import Singlefooter from '../../component/singleproduct/Singlefooter';
import CartSidebar from '../cart/CartSidebar'; // Import CartSidebar

const Singleproduct = ({ products, addToCart, addToCompare, cartItems, removeFromCart, totalAmount }) => {
  const { productName } = useParams();  // Get the product name from the URL
  const [quantity, setQuantity] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar
  const navigate = useNavigate();

  // Find the product based on the product name in URL
  const product = products?.find(p => p.name.toLowerCase() === productName.toLowerCase());

  useEffect(() => {
    if (!product) {
      console.error("Product not found:", productName);
    }
  }, [product, productName]);

  // Function to toggle the cart sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      toggleSidebar(); // Open the cart sidebar after adding
    }
  };

  const handleCompare = () => {
    if (product) {
      addToCompare(product);
      navigate('/compare', { state: { product } });
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-[#F9F1E7] p-4 pt-20">
        <div className="flex text-lg font-medium">
          <a href="/" className="text-gray-700 hover:text-black">Home</a>
          <span className="mx-2"> &gt; </span>
          <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start p-8">
        {/* Image Gallery */}
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
            <img src={Group94} alt="image1" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
            <img src={Outdoor} alt="image2" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
            <img src={Mask} alt="image3" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
            <img src={Maskgroup} alt="image4" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg mx-4">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl text-start font-bold">{product.name}</h1>
          <p className="text-2xl text-start font-semibold text-gray-700">${product.price}</p>

          {/* Rating Stars */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
                </svg>
              ))}
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
              </svg>
            </div>
            <span className="text-gray-500">(123 reviews)</span>
          </div>

          <p className="text-lg text-start font-light text-gray-600">{product.description}</p>
          {/* Size Options */}
<div>
 <h3 className="text-sm text-start font-bold">Size</h3>
 <div className="flex space-x-2">
   {['L', 'XL', 'XS'].map((size) => (
     <button
       key={size}
       className="border rounded px-4 py-2 text-sm hover:bg-yellow-600 hover:text-white"
     >
       {size}
     </button>
   ))}
 </div>
</div>
{/* Color Options */}
<div>
 <h3 className="text-sm text-start font-bold">Color</h3>
 <div className="flex space-x-2">
   {['#6C63FF', '#000000', '#FFD700'].map((color, index) => (
     <div key={index} className="h-8 w-8 rounded-full" style={{ backgroundColor: color }} />
   ))}
 </div>
</div>

<p className="text-lg text-start font-light text-gray-600">{product.description}</p>


          {/* Quantity and Add to Cart / Compare Buttons */}
          <div className="flex space-x-4 items-center">
            {/* Quantity Controls */}
            <div className="flex space-x-2 items-center">
              <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 text-black rounded">
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 text-black rounded">
                +
              </button>
            </div>

            {/* Add to Cart and Compare Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="w-[140px] py-2 text-black border border-black rounded-lg hover:bg-gray-100"
              >
                Add to Cart
              </button>
              <button
                onClick={handleCompare}
                className="w-[140px] py-2 text-black border border-black rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                <span className="mr-2">+</span> Compare
              </button>
            </div>
          </div>
          {/* SKU, Category, Tags */}
<div className="mt-4 space-y-2 text-start">
 <div className="flex items-start">
   <span className="font-bold">SKU:</span>
   <span className="ml-2">SS001</span>
 </div>
 <div className="flex items-start">
   <span className="font-bold">Category:</span>
   <span className="ml-2">Sofas</span>
 </div>
 <div className="flex items-start">
   <span className="font-bold">Tags:</span>
   <span className="ml-2">Sofa, Chair, Home, Shop</span>
 </div>
</div>
{/* Social Share */}
<div className="flex space-x-4 mt-4">
 <a href="#" className="text-gray-500 hover:text-gray-900">
   <img src={facebook} alt="Facebook" />
 </a>
 <a href="#" className="text-gray-500 hover:text-gray-900">
   <img src={inn} alt="LinkedIn" />
 </a>
 <a href="#" className="text-gray-500 hover:text-gray-900">
   <img src={twitter} alt="Twitter" />
 </a>
</div>
        </div>
      </div>

      {/* Related Products */}
      <Singlep />
      <Relatedproduct />
      <Singlefooter />

      Cart Sidebar
      <CartSidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        totalAmount={totalAmount}
      />
    </>
  );
};

export default Singleproduct;





// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Asofa3 from '../../assets/image/Asofa3.png';
// import Group94 from '../../assets/image/Group94.png';
// import Outdoor from '../../assets/image/Outdoor.png';
// import Mask from '../../assets/image/Mask.png';
// import Maskgroup from '../../assets/image/Maskgroup.png';
// import facebook from '../../assets/image/facebook.svg';
// import inn from '../../assets/image/inn.svg';
// import twitter from '../../assets/image/twitter.svg';
// import Singlep from '../singleproduct/singlep';
// import Relatedproduct from '../../component/singleproduct/Relatedproduct';
// import Singlefooter from '../../component/singleproduct/Singlefooter';

// const Singleproduct = ({ products, addToCart, addToCompare }) => {
//   const { productName } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Find the product based on the productName parameter
//   const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//   };

//   const handleCompare = () => {
//     addToCompare(product);
//     // Navigate to compare page and pass the product details via state
//     navigate('/compare', { state: { product } });
//   };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//       {/* Header with Breadcrumb */}
//       <div className="w-full bg-[#F9F1E7] p-4 pt-20">
//         <div className="flex text-lg font-medium">
//           <a href="/" className="text-gray-700 hover:text-black">Home</a>
//           <span className="mx-2"> &gt; </span>
//           <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center items-start p-8">
//         {/* Image Gallery */}
//         <div className="flex flex-col space-y-4">
//           {/* Placeholder images for thumbnail gallery */}
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Group94} alt="image1" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Outdoor} alt="image2" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Mask} alt="image3" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Maskgroup} alt="image4" className="w-full h-full object-cover" />
//           </div>
//         </div>

//         {/* Main Product Image */}
//         <div className="flex-1 bg-gray-100 p-4 rounded-lg mx-4">
//           <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl text-start font-bold">{product.name}</h1>
//           <p className="text-2xl text-start font-semibold text-gray-700">{product.price}</p>

//           {/* Rating Stars Logic */}
//           <div className="flex items-center space-x-2">
//             <div className="flex">
//               {[...Array(4)].map((_, i) => (
//                 <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
//                 </svg>
//               ))}
//               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
//               </svg>
//             </div>
//             <span className="text-gray-600">(4.9)</span>
//           </div>

//           {/* Size Options */}
//           <div>
//             <h3 className="text-sm text-start font-bold">Size</h3>
//             <div className="flex space-x-2">
//               {['L', 'XL', 'XS'].map((size) => (
//                 <button
//                   key={size}
//                   className="border rounded px-4 py-2 text-sm hover:bg-yellow-600 hover:text-white"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div>
//             <h3 className="text-sm text-start font-bold">Color</h3>
//             <div className="flex space-x-2">
//               {['#6C63FF', '#000000', '#FFD700'].map((color, index) => (
//                 <div key={index} className="h-8 w-8 rounded-full" style={{ backgroundColor: color }} />
//               ))}
//             </div>
//           </div>

//           <p className="text-lg text-start font-light text-gray-600">{product.description}</p>

//           {/* Quantity and Add to Cart / Compare Buttons */}
//           <div className="flex space-x-4 items-center">
//             {/* Quantity Controls */}
//             <div className="flex space-x-2 items-center">
//               <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 text-black rounded">
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 text-black rounded">
//                 +
//               </button>
//             </div>

//             {/* Add to Cart and Compare Buttons */}
//             <div className="flex space-x-4">
//               <button
//                 onClick={handleAddToCart}
//                 className="w-[140px] py-2 text-black border border-black rounded-lg hover:bg-gray-100"
//               >
//                 Add to Cart
//               </button>
//               <button
//                 onClick={handleCompare}  // Compare button handler
//                 className="w-[140px] py-2 text-black border border-black rounded-lg flex items-center justify-center hover:bg-gray-100"
//               >
//                 <span className="mr-2">+</span> Compare
//               </button>
//             </div>
//           </div>

//           {/* SKU, Category, Tags */}
//           <div className="mt-4 space-y-2 text-start">
//             <div className="flex items-start">
//               <span className="font-bold">SKU:</span>
//               <span className="ml-2">SS001</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Category:</span>
//               <span className="ml-2">Sofas</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Tags:</span>
//               <span className="ml-2">Sofa, Chair, Home, Shop</span>
//             </div>
//           </div>

//           {/* Social Share */}
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={facebook} alt="Facebook" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={inn} alt="LinkedIn" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={twitter} alt="Twitter" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <Singlep />
//       <Relatedproduct />
//       <Singlefooter />
//     </>
//   );
// };

// export default Singleproduct;




// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Asofa3 from '../../assets/image/Asofa3.png'; // Ensure the image paths are correct
// import Group94 from '../../assets/image/Group94.png';
// import Outdoor from '../../assets/image/Outdoor.png';
// import Mask from '../../assets/image/Mask.png';
// import Maskgroup from '../../assets/image/Maskgroup.png';
// import facebook from '../../assets/image/facebook.svg';
// import inn from '../../assets/image/inn.svg';
// import twitter from '../../assets/image/twitter.svg';
// import Singlep from '../singleproduct/singlep';
// import Relatedproduct from '../../component/singleproduct/Relatedproduct';
// import Singlefooter from '../../component/singleproduct/Singlefooter';

// const Singleproduct = ({ products, addToCart, addToCompare }) => {
//   const { productName } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [showCompare, setShowCompare] = useState(false);  // New state for toggle
//   const navigate = useNavigate();

//   const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...product, quantity });
//   };

//   const handleCompare = () => {
//     setShowCompare(!showCompare);  // Toggle visibility
//     addToCompare(product);
//     navigate('/compare', { state: { product } });
//   };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <>
//       <div className="w-full bg-[#F9F1E7] p-4 pt-20">
//         <div className="flex text-lg font-medium">
//           <a href="/" className="text-gray-700 hover:text-black">Home</a>
//           <span className="mx-2"> &gt; </span>
//           <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center items-start p-8">
//         <div className="flex flex-col space-y-4">
//           {/* Image Thumbnails */}
//           <img src={Group94} alt="image1" className="w-20 h-20 object-cover" />
//           <img src={Outdoor} alt="image2" className="w-20 h-20 object-cover" />
//           <img src={Mask} alt="image3" className="w-20 h-20 object-cover" />
//           <img src={Maskgroup} alt="image4" className="w-20 h-20 object-cover" />
//         </div>
//         <img src={product.image} alt={product.name} className="flex-1 w-full h-auto object-contain mx-4" />

//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-semibold text-gray-700">{product.price}</p>

//           {/* Add to Cart and Compare Buttons */}
//           <button onClick={handleAddToCart} className="py-2 px-4 border border-black rounded hover:bg-gray-100">Add to Cart</button>
//           <button onClick={handleCompare} className="py-2 px-4 border border-black rounded hover:bg-gray-100">Toggle Compare</button>
          
//           {/* Comparison Section */}
//           {showCompare && (
//             <div className="bg-white p-4 rounded shadow">
//               {/* You would populate this with the comparison logic/content */}
//               <h2 className="text-lg">Comparison Details</h2>
//               {/* Example of details */}
//               <p>{product.description}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <Singlep />
//       <Relatedproduct />
//       <Singlefooter />
//     </>
//   );
// };

// export default Singleproduct;










// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Asofa3 from '../../assets/image/Asofa3.png';
// import Group94 from '../../assets/image/Group94.png';
// import Outdoor from '../../assets/image/Outdoor.png';
// import Mask from '../../assets/image/Mask.png';
// import Maskgroup from '../../assets/image/Maskgroup.png';
// import facebook from '../../assets/image/facebook.svg';
// import inn from '../../assets/image/inn.svg';
// import twitter from '../../assets/image/twitter.svg';
// import Singlep from '../singleproduct/singlep';
// import Relatedproduct from '../../component/singleproduct/Relatedproduct';
// import Singlefooter from '../../component/singleproduct/Singlefooter';

// const Singleproduct = ({ products }) => {
//   const { productName } = useParams();
//   const [quantity, setQuantity] = useState(1);
  
//   // Find the product based on the productName parameter
//   const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   if (!product) {
//     return <div>Product not found</div>; // Handle case where product is not found
//   }

//   return (
//     <>
//       {/* Header with Breadcrumb */}
//       <div className="w-full bg-[#F9F1E7] p-4 pt-20"> 
//         <div className="flex text-lg font-medium">
//           <a href="/" className="text-gray-700 hover:text-black">Home</a>
//           <span className="mx-2"> &gt; </span>
//           <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center items-start p-8">
//         {/* Image Gallery */}
//         <div className="flex flex-col space-y-4">
//           {/* You can replace these images with product.images if you have multiple images */}
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Group94} alt="image1" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Outdoor} alt="image2" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Mask} alt="image3" className="w-full h-full object-cover" />
//           </div>
//           <div className="bg-gray-100 p-2 rounded-lg w-20 h-20">
//             <img src={Maskgroup} alt="image4" className="w-full h-full object-cover" />
//           </div>
//         </div>

//         {/* Main Product Image */}
//         <div className="flex-1 bg-gray-100 p-4 rounded-lg mx-4">
//           <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 space-y-4">
//           <h1 className="text-3xl text-start font-bold">{product.name}</h1>
//           <p className="text-2xl text-start font-semibold text-gray-700">{product.price}</p>
//           <div className="flex items-center space-x-2">
//             <div className="flex">
//               {/* Rating stars logic */}
//               {[...Array(4)].map((_, i) => (
//                 <svg
//                   key={i}
//                   className="w-5 h-5 text-yellow-500"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
//                 </svg>
//               ))}
//               <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.823h5.073c.967 0 1.372 1.24.588 1.81l-4.107 2.987 1.563 4.823c.299.922-.755 1.688-1.538 1.118L10 13.347l-4.107 2.987c-.783.57-1.837-.196-1.538-1.118l1.563-4.823-4.107-2.987c-.784-.57-.379-1.81.588-1.81h5.073l1.562-4.823z" />
//               </svg>
//             </div>
//             <p className="text-sm text-start text-gray-500">5 Customer Reviews</p>
//           </div>
//           <p className="text-gray-600 text-start">{product.description}</p>

//           {/* Size Options */}
//           <div>
//             <h3 className="text-sm text-start font-bold">Size</h3>
//             <div className="flex space-x-2">
//               {['L', 'XL', 'XS'].map((size) => (
//                 <button
//                   key={size}
//                   className="border rounded px-4 py-2 text-sm hover:bg-yellow-600 hover:text-white"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div>
//             <h3 className="text-sm text-start font-bold">Color</h3>
//             <div className="flex space-x-2">
//               {['#6C63FF', '#000000', '#FFD700'].map((color, index) => (
//                 <div key={index} className="h-8 w-8 rounded-full" style={{ backgroundColor: color }} />
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart and Quantity */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center border rounded">
//               <button onClick={handleDecrease} className="px-2">-</button>
//               <span className="px-4">{quantity}</span>
//               <button onClick={handleIncrease} className="px-2">+</button>
//             </div>
//             <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700">Add to Cart</button>
//             <button className="border px-4 py-2 rounded hover:bg-gray-200">+ Compare</button>
//           </div>

//           {/* SKU, Category, Tags */}
//           <div className="mt-4 space-y-2 text-start">
//             <div className="flex items-start">
//               <span className="font-bold">SKU:</span>
//               <span className="ml-2">SS001</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Category:</span>
//               <span className="ml-2">Sofas</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Tags:</span>
//               <span className="ml-2">Sofa, Chair, Home, Shop</span>
//             </div>
//           </div>

//           {/* Social Share */}
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={facebook} alt="Facebook" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={inn} alt="LinkedIn" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={twitter} alt="Twitter" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <Singlep />
//       <Relatedproduct />
//       <Singlefooter />
//     </>
//   );
// };

// export default Singleproduct;


//           {/* SKU, Category, Tags */}
//           <div className="mt-4 space-y-2 text-start">
//             <div className="flex items-start">
//               <span className="font-bold">SKU:</span>
//               <span className="ml-2">SS001</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Category:</span>
//               <span className="ml-2">Sofas</span>
//             </div>
//             <div className="flex items-start">
//               <span className="font-bold">Tags:</span>
//               <span className="ml-2">Sofa, Chair, Home, Shop</span>
//             </div>
//           </div>

//           {/* Social Share */}
//           <div className="flex space-x-4 mt-4">
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={facebook} alt="Facebook" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={inn} alt="LinkedIn" />
//             </a>
//             <a href="#" className="text-gray-500 hover:text-gray-900">
//               <img src={twitter} alt="Twitter" />
//             </a>
//           </div>

{/* <Singlep />
<Relatedproduct />
<Singlefooter /> */}



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Singleproduct = ({ products }) => {
//   const { productName } = useParams();

//   // Find the product by name
//   const product = products.find(p => p.name === productName);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <div className="bg-gray-50 py-10">
//       <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           {/* Conditional rendering for product images */}
//           {product.images && (
//             <div className="flex justify-center space-x-2 mb-4">
//               {product.images.map((image, index) => (
//                 <img key={index} src={image} alt={`Product preview ${index}`} className="w-20 h-20 object-cover rounded-lg cursor-pointer" />
//               ))}
//             </div>
//           )}
//           <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
//           <p className="text-gray-500 mb-4">{product.description}</p>
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-xl font-semibold">{product.price}</span>
//             {product.originalPrice && <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>}
//           </div>
//           {/* Render size options if available */}
//           {product.sizes && (
//             <div className="flex items-center mb-4">
//               <div className="mr-2 font-bold">Size:</div>
//               {product.sizes.map((size, index) => (
//                 <span key={index} className="mr-2 px-3 py-1 border rounded-full cursor-pointer">{size}</span>
//               ))}
//             </div>
//           )}
//           {/* Render color options if available */}
//           {product.colors && (
//             <div className="flex items-center mb-4">
//               <div className="mr-2 font-bold">Color:</div>
//               {product.colors.map((color, index) => (
//                 <span key={index} className="h-6 w-6 rounded-full cursor-pointer border" style={{ backgroundColor: color }}></span>
//               ))}
//             </div>
//           )}
//           <div className="flex space-x-2">
//             <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Add to Cart</button>
//             <button className="px-6 py-2 border rounded-lg">Compare</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;




// import React from 'react';
// import { useParams } from 'react-router-dom';

// const Singleproduct = ({ products }) => {
//   const { productName } = useParams();
  
//   // Find the product by name
//   const product = products.find((p) => p.name === productName);

//   if (!product) return <div>Product not found!</div>;

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//         <img src={product.image} alt={product.name} className="w-full h-auto mb-4" />
//         <p className="text-sm text-gray-500 mb-2">{product.description}</p>
//         <p className="text-lg font-bold text-gray-500">{product.price}</p>
//         {product.originalPrice && (
//           <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Singleproduct;
