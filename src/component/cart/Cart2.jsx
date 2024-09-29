


// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const CheckoutForm = () => {
//   // Validation schema
//   const checkoutSchema = Yup.object().shape({
//     firstName: Yup.string().required('First name is required'),
//     lastName: Yup.string().required('Last name is required'),
//     companyName: Yup.string(),
//     country: Yup.string().required('Country is required'),
//     streetAddress: Yup.string().required('Street address is required'),
//     city: Yup.string().required('City is required'),
//     province: Yup.string().required('Province is required'),
//     zipCode: Yup.string().required('ZIP code is required'),
//     phone: Yup.string().required('Phone number is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//   });

//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         companyName: '',
//         country: '',
//         streetAddress: '',
//         city: '',
//         province: '',
//         zipCode: '',
//         phone: '',
//         email: '',
//       }}
//       validationSchema={checkoutSchema}
//       onSubmit={values => {
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form className="flex flex-col gap-4 p-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Name Fields */}
//             <div>
//               <label htmlFor="firstName">First Name</label>
//               <Field name="firstName" type="text" className="input" />
//               <ErrorMessage name="firstName" component="div" className="error" />
//             </div>
//             <div>
//               <label htmlFor="lastName">Last Name</label>
//               <Field name="lastName" type="text" className="input" />
//               <ErrorMessage name="lastName" component="div" className="error" />
//             </div>

//             {/* Company Name */}
//             <div className="md:col-span-2">
//               <label htmlFor="companyName">Company Name (Optional)</label>
//               <Field name="companyName" type="text" className="input" />
//               <ErrorMessage name="companyName" component="div" className="error" />
//             </div>
//           </div>

//           {/* Address Fields */}
//           <label htmlFor="streetAddress">Street address</label>
//           <Field name="streetAddress" type="text" className="input" />
//           <ErrorMessage name="streetAddress" component="div" className="error" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="city">Town / City</label>
//               <Field name="city" type="text" className="input" />
//               <ErrorMessage name="city" component="div" className="error" />
//             </div>
//             <div>
//               <label htmlFor="province">Province</label>
//               <Field name="province" as="select" className="input">
//                 <option value="">Select a province</option>
//                 <option value="province1">Province 1</option>
//                 <option value="province2">Province 2</option>
//               </Field>
//               <ErrorMessage name="province" component="div" className="error" />
//             </div>
//           </div>

//           <label htmlFor="zipCode">ZIP code</label>
//           <Field name="zipCode" type="text" className="input" />
//           <ErrorMessage name="zipCode" component="div" className="error" />

//           <label htmlFor="phone">Phone</label>
//           <Field name="phone" type="text" className="input" />
//           <ErrorMessage name="phone" component="div" className="error" />

//           <label htmlFor="email">Email address</label>
//           <Field name="email" type="email" className="input" />
//           <ErrorMessage name="email" component="div" className="error" />

//           <button type="submit" className="btn mt-4">Place order</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CheckoutForm;


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

// const Singleproduct = ({ products, addToCart }) => {
//   const { productName } = useParams();
//   const [quantity, setQuantity] = useState(1);
  
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
//     console.log(`Comparing ${product.name}`);
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
          
//           <p className="text-lg text-start font-light text-gray-600">{product.description}</p>

//           {/* Quantity */}
//           <div className="flex space-x-2 items-center">
//             <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 text-black rounded">-</button>
//             <span>{quantity}</span>
//             <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 text-black rounded">+</button>
//           </div>

//           {/* Add to Cart and Compare Buttons */}
//           <button onClick={handleAddToCart} className="w-full py-2 bg-black text-white rounded-lg">Add to Cart</button>
//           <button onClick={handleCompare} className="w-full py-2 bg-black text-white rounded-lg flex items-center">
//             <span className="mr-2">+</span> Compare
//           </button>
//         </div>
//         {/* SKU, Category, Tags */}
//         <div className="mt-4 space-y-2 text-start">
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
//       </div>

//       {/* Related Products */}
//       <Singlep />
//       <Relatedproduct />
//       <Singlefooter />
//     </>
//   );
// };

// export default Singleproduct;


// import React from 'react';
// import productImage from '../../assets/image/Asgaard sofa 5.png'; // Path to your product image

// const Cart2 = () => {
//   return (
//     <div className="container mx-auto my-10">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
//         {/* Cart Table */}
//         <div className="col-span-2">
//           <table className="min-w-full bg-white border">
//             <thead>
//               <tr className="bg-[#f9f3ee] text-left">
//                 <th className="p-4 text-black">Product</th>
//                 <th className="p-4 text-black">Price</th>
//                 <th className="p-4 text-black">Quantity</th>
//                 <th className="p-4 text-black">Subtotal</th>
//                 <th className="p-4"></th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="p-4 flex items-center">
//                   <img src={productImage} alt="Asgaard Sofa" className="w-16 h-16 rounded mr-4" />
//                   <span className="text-gray-500">Asgaard sofa</span>
//                 </td>
//                 <td className="p-4 text-gray-500">Rs. 250,000.00</td>
//                 <td className="p-4">
//                   <input type="number" defaultValue="1" className="border w-12 p-2 text-center" />
//                 </td>
//                 <td className="p-4 text-gray-500">Rs. 250,000.00</td>
//                 <td className="p-4">
//                   <button className="text-yellow-500 hover:text-yellow-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Cart Totals */}
//         <div className="bg-[#fbf7f2] p-6 rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
//           <div className="mb-4 flex justify-between">
//             <span className="text-gray-500">Subtotal</span>
//             <span className="text-gray-500">Rs. 250,000.00</span>
//           </div>
//           <div className="mb-4 flex justify-between">
//             <span className="font-bold text-black">Total</span>
//             <span className="text-yellow-500 font-bold">Rs. 250,000.00</span>
//           </div>
//           <button className="bg-white text-black border-2 border-black py-2 px-4 w-full rounded-lg font-bold hover:bg-gray-100">
//             Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart2;




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

// const Singleproduct = ({ products, addToCart }) => {
//   const { productName } = useParams();
//   const [quantity, setQuantity] = useState(1);
  
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
//     // Implement compare logic here
//     console.log(`Comparing ${product.name}`);
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
//           <p className="text-lg text-start font-light text-gray-600">{product.description}</p>

//           {/* Quantity */}
//           <div className="flex space-x-2 items-center">
//             <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 text-black rounded">-</button>
//             <span>{quantity}</span>
//             <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 text-black rounded">+</button>
//           </div>

//           {/* Add to Cart and Compare Buttons */}
//           <button onClick={handleAddToCart} className="w-full py-2 bg-black text-white rounded-lg">Add to Cart</button>
//           <button onClick={handleCompare} className="w-full py-2 bg-black text-white rounded-lg flex items-center">
//             <span className="mr-2">+</span> Compare
//           </button>
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

// const Comparepage = () => {
//   const [compareList, setCompareList] = useState([]); // Comparison list state
//   const products = getProducts(); // Available products

//   // Function to add product to comparison list
//   const handleAddToCompare = (product) => {
//     // Prevent duplicates in the comparison list
//     if (!compareList.find(item => item.id === product.id)) {
//       setCompareList(prevList => [...prevList, product]); // Update comparison list
//     }
//   };

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

//       {/* Main Section */}
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

//       {/* Footer Components */}
//       <Comparedetails />
//       <Features />
//       <Footer />
//     </>
//   );
// };

// export default Comparepage;



