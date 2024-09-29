import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png";
import firstl from "../../assets/image/firstl.svg";
import search from "../../assets/image/search.svg";
import favorite from "../../assets/image/favourite.svg";
import cartIcon from "../../assets/image/cart.svg";

const Navbar = ({ cart }) => {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl'>
      <div className='flex justify-between items-center px-8 py-4'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-12 h-12' />
          <span className='ml-2 text-lg font-bold'>Furniro</span>
        </div>

        {/* Navigation Links */}
        <div className='flex items-center space-x-4'>
          <Link to="/" className='text-black hover:underline'>Home</Link>
          <Link to="/shop" className='text-black hover:underline'>Shop</Link>
          <Link to="/about" className='text-black hover:underline'>About</Link>
          <Link to="/contact" className='text-black hover:underline'>Contact</Link>
          <Link to="/blog" className='text-black hover:underline'>Blog</Link>
        </div>

        {/* Icon Section */}
        <div className='flex items-center space-x-4'>
          <img src={firstl} alt="firstl" className='w-6 h-6' />
          <img src={search} alt="search" className='w-6 h-6' />
          <img src={favorite} alt="favorite" className='w-6 h-6' />

          {/* Cart icon with dynamic item count */}
          <Link to="/cart" className='relative'>
            <img src={cartIcon} alt="cart" className='w-6 h-6' />
            {cartCount > 0 && (
              <span className="bg-red-600 text-white rounded-full px-2 absolute top-0 right-0 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../../assets/image/logo.png";
// import firstl from "../../assets/image/firstl.svg";
// import search from "../../assets/image/search.svg";
// import favorite from "../../assets/image/favourite.svg";
// import cartIcon from "../../assets/image/cart.svg";


// const Navbar = () => {
//   return (
//     <nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl'>
//       <div className='flex justify-between items-center px-8 py-4'>
//         <div className='flex items-center'>
//           <img src={logo} alt="logo" className='w-12 h-12' />
//           <span className='ml-2 text-lg font-bold'>Furniro</span>
//         </div>
        
//         <div className='flex items-center space-x-4'>
//           <Link to="/" className='text-black hover:underline'>Home</Link>
//           <Link to="/shop" className='text-black hover:underline'>Shop</Link>
//           <Link to="/about" className='text-black hover:underline'>About</Link>
//           <Link to="/contact" className='text-black hover:underline'>Contact</Link>
//           <Link to="/blog" className='text-black hover:underline'>Blog</Link>
//         </div>

//         <div className='flex items-center space-x-4'>
//           <img src={firstl} alt="firstl" className='w-6 h-6' />
//           <img src={search} alt="search" className='w-6 h-6' />
//           <img src={favorite} alt="favorite" className='w-6 h-6' />
          
//           {/* Cart icon without item count */}
//           <Link to="/cart" className='relative'>
//             <img src={cartIcon} alt="cart" className='w-6 h-6' />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




























// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../../assets/image/logo.png";
// import firstl from "../../assets/image/firstl.svg";
// import search from "../../assets/image/search.svg";
// import favorite from "../../assets/image/favourite.svg";
// import cartIcon from "../../assets/image/cart.svg"; // renamed to avoid conflict with the 'cart' state

// const Navbar = ({ cart }) => {
//   const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0); // Calculate total cart items

//   return (
//     <nav className='fixed w-full top-0 z-50 bg-white shadow-md max-w-screen-2xl'>
//       <div className='flex justify-between items-center px-8 py-4'>
//         <div className='flex items-center'>
//           <img src={logo} alt="logo" className='w-12 h-12' />
//           <span className='ml-2 text-lg font-bold'>Furniro</span>
//         </div>
        
//         <div className='flex items-center space-x-4'>
//           <Link to="/" className='text-black hover:underline'>Home</Link>
//           <Link to="/shop" className='text-black hover:underline'>Shop</Link>
//           <Link to="/about" className='text-black hover:underline'>About</Link>
//           <Link to="/contact" className='text-black hover:underline'>Contact</Link>
//         </div>

//         <div className='flex items-center space-x-4'>
//           <img src={firstl} alt="firstl" className='w-6 h-6' />
//           <img src={search} alt="search" className='w-6 h-6' />
//           <img src={favorite} alt="favorite" className='w-6 h-6' />

//           {/* Cart with item count */}
//           <Link to="/cart" className='relative'>
//             <img src={cartIcon} alt="cart" className='w-6 h-6' />
//             {cartItemCount > 0 && (
//               <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
//                 {cartItemCount}
//               </span>
//             )}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
