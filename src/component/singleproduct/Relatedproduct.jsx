import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const Relatedproduct = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    navigate(`/product/${product.name}`); // Navigate to the single product page
  };

  const products = [
    // Your product list here...
    {
            name: 'Syltherine',
            price: 'Rp 2,500,000',
            originalPrice: 'Rp 3,500,000',
            discount: '30%',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_1_lhsnwg.png',
            description: 'Stylish cafe chair with premium finish.'
          },
          {
            name: 'Leviosa',
            price: 'Rp 2,500,000',
            originalPrice: '',
            discount: null,
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137812/Images_5_d8eyq0.png',
            description: 'Stylish cafe chair with premium finish.'
          },
          {
            name: 'Lolito',
            price: 'Rp 7.000.000',
            originalPrice: 'Rp 14.000.000',
            discount: '50%',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
            description: 'Luxury big sofa'
          },
          {
            name: 'Respira',
            price: 'Rp 500.000',
            originalPrice: null,
            discount: 'New',
            tagColor: 'bg-green-400',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
            description: 'Outdoor bar table and stool'
          },
          {
            name: 'Lolito',
            price: 'Rp 7.000.000',
            originalPrice: 'Rp 14.000.000',
            discount: '50%',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
            description: 'Luxury big sofa'
          },
          {
            name: 'Respira',
            price: 'Rp 500.000',
            originalPrice: null,
            discount: 'New',
            tagColor: 'bg-green-400',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
            description: 'Outdoor bar table and stool'
          },
          {
            name: 'Lolito',
            price: 'Rp 7.000.000',
            originalPrice: 'Rp 14.000.000',
            discount: '50%',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/image_3_pkyjwe.png',
            description: 'Luxury big sofa'
          },
          {
            name: 'Respira',
            price: 'Rp 500.000',
            originalPrice: null,
            discount: 'New',
            tagColor: 'bg-green-400',
            image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726137829/Images_d0gghj.png',
            description: 'Outdoor bar table and stool'
          },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Related Product</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {products.map((product, index) => (
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

            <div className="mt-4 text-left">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-gray-500">{product.price}</span>
                <span className="text-sm text-gray-500">{product.originalPrice}</span>
              </div>
            </div>

            {/* Overlay for Add to Cart and additional buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex-col flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Add to Cart Button */}
              <button
                className="bg-white text-gray-800 px-4 py-2 font-semibold rounded-lg"
                onClick={() => addToCart(product)}
              >
                View Product
              </button>

              {/* Share, Compare, Like buttons */}
              <div className="absolute bottom-0 left-0 right-0 w-full mt-2 space-y-2 px-4 py-2 bg-gray-900 bg-opacity-75 text-white flex justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-sm">Share</button>
                <button className="text-sm">Compare</button>
                <button className="text-sm">Like</button>
              </div>
            </div>
          </div>
        ))}
        {/* Show More Button */}
        <div className="col-span-full flex justify-center items-center text-center mt-8">
          <button className="border border-yellow-800 text-yellow-800 px-6 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition-colors duration-300 flex items-center">
           Show More
      </button>
       </div>
      </div>
    </div>
  );
};

export default Relatedproduct;
