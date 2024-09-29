import React, { useState } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import productsData from '../pproduct/ProductData.json';

const Shop = ({ addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16); // 16 items per page for a 4x4 grid
  const [compareProducts, setCompareProducts] = useState([]); // State to hold products for comparison
  const navigate = useNavigate(); // React Router navigation hook

  // Calculate the total number of pages
  const pageCount = Math.ceil(productsData.products.length / itemsPerPage);

  // Get products for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productsData.products.slice(indexOfFirstItem, indexOfLastItem);

  // Add product to comparison
  const addToCompare = (product) => {
    setCompareProducts((prev) => [...prev, product]);
    // Redirect to the comparison page after selecting a product
    navigate('/compare', { state: { products: [...compareProducts, product] } });
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative py-16 bg-gray-50">
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {currentProducts.map((product, index) => (
          <div key={index} className="relative bg-white p-4 rounded-lg shadow-md group">
            {product.discount && (
              <div className={`absolute right-4 top-4 ${product.tagColor || 'bg-red-500'} text-white px-3 py-1 text-sm font-bold w-[48px] h-[48px] rounded-full flex items-center justify-center`}>
                {product.discount.includes('%') ? `-${product.discount}` : product.discount}
              </div>
            )}
            <Image
              className="w-full h-60 object-cover rounded-lg"
              cloudName="dfo4alc3w"
              publicId={product.image}
              alt={product.name}
            >
              <Transformation crop="scale" width="200" />
            </Image>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex-col flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="bg-white text-gray-800 px-4 py-2 font-semibold rounded-lg"
                onClick={() => addToCart(product)}  // Use the addToCart function here
              >
                Add to Cart
              </button>

              {/* Buttons for Share, Compare, and Like */}
              <div className="flex space-x-8 mt-2 text-white  justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex flex-col items-center space-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7l7 7-7 7" />
                  </svg>
                  <span className="text-xs">Share</span>
                </button>
                <button
                  className="flex flex-col items-center space-y-1"
                  onClick={() => addToCompare(product)} // Add compare functionality
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
                  </svg>
                  <span className="text-xs">Compare</span>
                </button>
                <button className="flex flex-col items-center space-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 7 17.414 7 12.5a5 5 0 1110 0C17 17.414 12 21 12 21z" />
                  </svg>
                  <span className="text-xs">Like</span>
                </button>
              </div>
            </div>


            <div className="mt-4 text-left">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-500">{product.price} Rs</span>
                <span className="text-sm line-through text-gray-500">{product.originalPrice} Rs</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < pageCount && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="px-4 py-2 mx-1 bg-yellow-600 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Shop;







// import React, { useState } from 'react';
// import { Image, Transformation } from 'cloudinary-react';
// import productsData from '../pproduct/ProductData.json';  // Adjust the path if needed
// import CartSidebar from '../cart/CartSidebar';  // Ensure this is the correct path

// // ... rest of your code


// const Shop = () => {
//     const [cart, setCart] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(16); // Change to 16 items per page for 4x4 grid

//     // Add to cart or update quantity
//     const addToCart = (product) => {
//         const existingProduct = cart.find((item) => item.id === product.id);
//         if (existingProduct) {
//             setCart(cart.map((item) =>
//                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//             ));
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//         console.log(`${product.name} added to cart!`); // For debugging
//     };

//     // Remove item from cart
//     const removeFromCart = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     // Update product quantity in cart
//     const updateQuantity = (productId, newQuantity) => {
//         if (newQuantity > 0) {
//             setCart(cart.map((item) =>
//                 item.id === productId ? { ...item, quantity: newQuantity } : item
//             ));
//         } else {
//             removeFromCart(productId);
//         }
//     };

//     // Calculate the total number of pages
//     const pageCount = Math.ceil(productsData.products.length / itemsPerPage);

//     // Get current products
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentProducts = productsData.products.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <div className="relative py-16 bg-gray-50">
//             {/* Product Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
//                 {currentProducts.map((product, index) => (
//                     <div key={index} className="relative bg-white p-4 rounded-lg shadow-md group">
//                         {product.discount && (
//                             <div className={`absolute right-4 top-4 ${product.tagColor || 'bg-red-500'} text-white px-3 py-1 text-sm font-bold w-[48px] h-[48px] rounded-full flex items-center justify-center`}>
//                                 {product.discount.includes('%') ? `-${product.discount}` : product.discount}
//                             </div>
//                         )}
//                         <Image
//                             className="w-full h-60 object-cover rounded-lg"
//                             cloudName="dfo4alc3w"
//                             publicId={product.image}
//                             alt={product.name}
//                         >
//                             <Transformation crop="scale" width="200" />
//                         </Image>
//                         <div className="absolute inset-0 bg-black bg-opacity-50 flex-col flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <button
//                                 className="bg-white text-gray-800 px-4 py-2 font-semibold rounded-lg"
//                                 onClick={() => addToCart(product)}
//                             >
//                                 Add to cart
//                             </button>
//                             <div className="absolute bottom-0 left-0 right-0 w-full mt-2 space-y-2 px-4 py-2 bg-gray-900 bg-opacity-75 text-white flex justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <button className="text-sm">Share</button>
//                                 <button className="text-sm">Compare</button>
//                                 <button className="text-sm">Like</button>
//                             </div>
//                         </div>
//                         <div className="mt-4 text-left">
//                             <h3 className="text-xl font-semibold">{product.name}</h3>
//                             <p className="text-sm text-gray-500">{product.description}</p>
//                             <div className="flex justify-between items-center mt-2">
//                                 <span className="text-lg font-bold text-gray-500">{product.price} Rs</span>
//                                 <span className="text-sm line-through text-gray-500">{product.originalPrice} Rs</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-4">
//                 {Array.from({ length: pageCount }, (_, i) => (
//                     <button
//                         key={i + 1}
//                         onClick={() => paginate(i + 1)}
//                         className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-300'}`}
//                     >
//                         {i + 1}
//                     </button>
//                 ))}
//                 {currentPage < pageCount && (
//                     <button
//                         onClick={() => paginate(currentPage + 1)}
//                         className="px-4 py-2 mx-1 bg-yellow-600 text-white"
//                     >
//                         Next
//                     </button>
//                 )}
//             </div>

//             {/* Cart Sidebar */}
//             {/* <CartSidebar cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} /> */}
//         </div>
//     );
// };

// export default Shop;


