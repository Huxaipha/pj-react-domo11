import { UserProvider } from './component/context/UserContext';
import { CompareProvider } from './component/compare/Comparecontext';
import Comparepage from './component/compare/Comparepage';
import Checkout from './component/checkout/Checkout';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './component/home/Home';
import Shop from './component/shop/Shop';
import Blog from './component/blog/Blog';
import Cart from './component/cart/Cart';
import Navbar from './component/nav/Navbar';
import Contact from './component/contact/Contact';
import Singleproduct from './component/singleproduct/Singleproduct';
import CartSidebar from './component/cart/CartSidebar';

const products = [
  {
    name: 'Syltherine',
    price: 'Rp 2,500,000',
    originalPrice: 'Rp 3,500,000',
    discount: '30%',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png',
    description: 'Stylish cafe chair with premium finish.',
  },
  {
    name: 'Leviosa',
    price: 'Rp 2,500,000',
    originalPrice: '',
    discount: null,
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Images_5_d8eyq0.png',
    description: 'Stylish cafe chair with premium finish.',
  },
  {
    name: 'Lolito',
    price: 'Rp 7,000,000',
    originalPrice: 'Rp 14,000,000',
    discount: '50%',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
    description: 'Luxury big sofa',
  },
  {
    name: 'Respira',
    price: 'Rp 500,000',
    originalPrice: null,
    discount: 'New',
    tagColor: 'bg-green-400',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
    description: 'Outdoor bar table and stool',
  },
];

function App() {
  const [cart, setCart] = useState([]); // Cart state
  const [compareList, setCompareList] = useState([]); // Comparison state
  const [isCartOpen, setIsCartOpen] = useState(false); // Sidebar visibility state

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.name === product.name);
    if (exists) {
      setCart(cart.map((item) =>
        item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true); // Open the cart sidebar when a product is added
  };

  // Remove product from cart
  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  // Add product to comparison list
  const addToCompare = (product) => {
    setCompareList((prev) => {
      if (!prev.some((item) => item.name === product.name)) {
        return [...prev, product];
      }
      return prev; // Avoid adding duplicate products
    });
  };

  // Toggle the cart sidebar visibility
  const toggleSidebar = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <UserProvider>
      <CompareProvider>
        <Router>
          {/* Navbar */}
          <Navbar cart={cart} />

          {/* Cart Sidebar */}
          <CartSidebar
            isOpen={isCartOpen}
            toggleSidebar={toggleSidebar}
            cartItems={cart}
            removeFromCart={removeFromCart}
            totalAmount={cart.reduce(
              (total, item) => total + parseFloat(item.price.replace(/[Rp ,]/g, '')) * item.quantity,
              0
            )}
          />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop addToCart={addToCart} addToCompare={addToCompare} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />
            <Route
              path="/product/:productName"
              element={
                <Singleproduct
                  products={products}
                  addToCart={addToCart}
                  addToCompare={addToCompare}
                />
              }
            />
            <Route path="/compare" element={<Comparepage compareList={compareList} />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CompareProvider>
    </UserProvider>
  );
}

export default App;


  
  // More products here...

// import { UserProvider } from './component/context/UserContext';
// import { CompareProvider } from './component/compare/Comparecontext'; 
// import Comparepage from './component/compare/Comparepage';
// import Checkout from './component/checkout/Checkout';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import Home from './component/home/Home';
// import Shop from './component/shop/Shop';
// import Blog from './component/blog/Blog';
// import Cart from './component/cart/Cart';
// import Navbar from './component/nav/Navbar';
// import Contact from './component/contact/Contact';
// import Singleproduct from './component/singleproduct/Singleproduct'; 
// import Comparedetails from './component/compare/Comparedetails';
// import CartSidebar from './component/cart/CartSidebar'; // Import CartSidebar component

// const products = [
//   {
//     name: 'Syltherine',
//     price: 'Rp 2,500,000',
//     originalPrice: 'Rp 3,500,000',
//     discount: '30%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Leviosa',
//     price: 'Rp 2,500,000',
//     originalPrice: '',
//     discount: null,
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Images_5_d8eyq0.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Lolito',
//     price: 'Rp 7.000.000',
//     originalPrice: 'Rp 14.000.000',
//     discount: '50%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
//     description: 'Luxury big sofa'
//   },
//   {
//     name: 'Respira',
//     price: 'Rp 500.000',
//     originalPrice: null,
//     discount: 'New',
//     tagColor: 'bg-green-400',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
//     description: 'Outdoor bar table and stool'
//   },
//   // More products here...
// ];

// function App() {
//   const [cart, setCart] = useState([]);
//   const [compareList, setCompareList] = useState([]); // State for comparison products
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for controlling the CartSidebar

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     const exists = cart.find((item) => item.name === product.name);
//     if (exists) {
//       setCart(cart.map((item) =>
//         item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     setIsSidebarOpen(true); // Open the cart sidebar when a product is added
//   };

//   // Function to remove a product from the cart
//   const removeFromCart = (productName) => {
//     setCart(cart.filter((item) => item.name !== productName));
//   };

//   // Function to add a product to the compare list
//   const addToCompare = (product) => {
//     setCompareList((prev) => {
//       if (!prev.some((item) => item.name === product.name)) {
//         return [...prev, product];
//       }
//       return prev; // Do not add duplicates
//     });
//   };

//   // Function to toggle the cart sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <UserProvider>
//       <CompareProvider>
//         <Router>
//           <Navbar cart={cart} toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar to Navbar */}
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/shop' element={<Shop addToCart={addToCart} addToCompare={addToCompare} />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/blog' element={<Blog />} />
//             <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
//             <Route path='/product/:productName' element={<Singleproduct products={products} addToCart={addToCart} addToCompare={addToCompare} />} />
//             <Route path='/compare' element={<Comparepage compareList={compareList} />} /> {/* Pass compareList to Comparepage */}
//             <Route path='/checkout' element={<Checkout />} />
//           </Routes>

//           {/* Cart Sidebar */}
//           <CartSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} cart={cart} removeFromCart={removeFromCart} />
//         </Router>
//       </CompareProvider>
//     </UserProvider>
//   );
// }

// export default App;








// // Import necessary components and contexts
// import { UserProvider } from './component/context/UserContext';
// import { CompareProvider } from './component/compare/Comparecontext'; 
// import Comparepage from './component/compare/Comparepage'; // Import Comparepage here
// import Checkout from './component/checkout/Checkout'; // Import Checkout component
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import Home from './component/home/Home';
// import Shop from './component/shop/Shop';
// import Blog from './component/blog/Blog';
// import Cart from './component/cart/Cart';
// import Navbar from './component/nav/Navbar';
// import Contact from './component/contact/Contact';
// import Singleproduct from './component/singleproduct/Singleproduct'; 
// import Comparedetails from './component/compare/Comparedetails'; // Adjust path as needed

// const products = [
//   // Your product data
//   {
//     name: 'Syltherine',
//     price: 'Rp 2,500,000',
//     originalPrice: 'Rp 3,500,000',
//     discount: '30%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Leviosa',
//     price: 'Rp 2,500,000',
//     originalPrice: '',
//     discount: null,
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Images_5_d8eyq0.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Lolito',
//     price: 'Rp 7.000.000',
//     originalPrice: 'Rp 14.000.000',
//     discount: '50%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
//     description: 'Luxury big sofa'
//   },
//   {
//     name: 'Respira',
//     price: 'Rp 500.000',
//     originalPrice: null,
//     discount: 'New',
//     tagColor: 'bg-green-400',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
//     description: 'Outdoor bar table and stool'
//   },
//   // More products here...
// ];

// function App() {
//   const [cart, setCart] = useState([]);
//   const [compareList, setCompareList] = useState([]); // State for comparison products

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     const exists = cart.find((item) => item.name === product.name);
//     if (exists) {
//       setCart(cart.map((item) =>
//         item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   // Function to remove a product from the cart
//   const removeFromCart = (productName) => {
//     setCart(cart.filter((item) => item.name !== productName));
//   };

//   // Function to add a product to the compare list
//   const addToCompare = (product) => {
//     setCompareList((prev) => {
//       if (!prev.some((item) => item.name === product.name)) {
//         return [...prev, product];
//       }
//       return prev; // Do not add duplicates
//     });
//   };

//   return (
//     <UserProvider>
//       <CompareProvider>
//         <Router>
//           <Navbar cart={cart} />
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/shop' element={<Shop addToCart={addToCart} addToCompare={addToCompare} />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/blog' element={<Blog />} />
//             <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
//             <Route path='/product/:productName' element={<Singleproduct products={products} addToCart={addToCart} addToCompare={addToCompare} />} />
//             <Route path='/compare' element={<Comparepage compareList={compareList} />} /> {/* Pass compareList to Comparepage */}
//             <Route path='/checkout' element={<Checkout />} /> {/* Add Checkout route */}
//           </Routes>
//         </Router>
//       </CompareProvider>
//     </UserProvider>
//   );
// }

// export default App;








// import { UserProvider } from './component/context/UserContext';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './component/home/Home';
// import Shop from './component/shop/Shop';
// import Blog from './component/blog/Blog';
// import Cart from './component/cart/Cart';
// import Navbar from './component/nav/Navbar';
// import Contact from './component/contact/Contact';
// import Singleproduct from './component/singleproduct/Singleproduct'; // Import the single product component

// // Declare the product list here
// const products = [
//   {
//     name: 'Syltherine',
//     price: 'Rp 2,500,000',
//     originalPrice: 'Rp 3,500,000',
//     discount: '30%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Leviosa',
//     price: 'Rp 2,500,000',
//     originalPrice: '',
//     discount: null,
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Images_5_d8eyq0.png',
//     description: 'Stylish cafe chair with premium finish.'
//   },
//   {
//     name: 'Lolito',
//     price: 'Rp 7.000.000',
//     originalPrice: 'Rp 14.000.000',
//     discount: '50%',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
//     description: 'Luxury big sofa'
//   },
//   {
//     name: 'Respira',
//     price: 'Rp 500.000',
//     originalPrice: null,
//     discount: 'New',
//     tagColor: 'bg-green-400',
//     image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
//     description: 'Outdoor bar table and stool'
//   },
//   // More products here...
// ];

// function App() {
//   return (
//     <>
//       <UserProvider>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/shop' element={<Shop />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='/blog' element={<Blog />} />
//             <Route path='/cart' element={<Cart />} />
//             {/* Route for single product page */}
//             <Route path='/product/:productName' element={<Singleproduct products={products} />} />
//           </Routes>
//         </Router>
//       </UserProvider>
//     </>
//   );
// }

// export default App;












