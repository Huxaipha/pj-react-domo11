import React, { createContext, useContext, useState } from 'react';

// Create the Cart Context
export const CartContext = createContext(); // Export CartContext

// CartProvider component to provide cart state to other components
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart and manage quantity
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity } // Increment by the passed quantity
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]); // Add product with initial quantity
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price of items in cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export default CartContext;





// import React, { createContext, useContext, useState } from "react";

// // Create the Cart Context
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use the CartContext
// export const useCart = () => useContext(CartContext);

// export default CartContext;





// // import React, { createContext, useContext, useState } from 'react';

// // // Create the CartContext
// // export const CartContext = createContext();

// // // Create a custom hook to use the CartContext
// // export const useCart = () => useContext(CartContext);

// // // CartProvider to wrap around components that need cart access
// // export const CartProvider = () => {
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (product) => {
// //     const existingProduct = cart.find((item) => item.id === product.id);
// //     if (existingProduct) {
// //       setCart(cart.map((item) => 
// //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //       ));
// //     } else {
// //       setCart([...cart, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   return (
// //     <CartContext.Provider value={{ cart, addToCart }}>
// //       {/* Here you can include components that should have cart access in the future */}
// //     </CartContext.Provider>
// //   );
// // };
// // export const useCart = () => useContext(CartContext);

// // export default CartContext;

// // export const CartConsumer = CartContext.Consumer; // Optional: if you want to use consumer elsewhere




// // import React, { createContext, useContext, useState } from 'react';

// // // Create the CartContext
// // export const CartContext = createContext();

// // // Create a custom hook to use the CartContext
// // export const useCart = () => useContext(CartContext);

// // // CartProvider to wrap around components that need cart access
// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (product) => {
// //     const existingProduct = cart.find((item) => item.id === product.id);
// //     if (existingProduct) {
// //       setCart(cart.map((item) => 
// //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
// //       ));
// //     } else {
// //       setCart([...cart, { ...product, quantity: 1 }]);
// //     }
// //   };

// //   return (
// //     <CartContext.Provider value={{ cart, addToCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };
// // export default CartContext;

