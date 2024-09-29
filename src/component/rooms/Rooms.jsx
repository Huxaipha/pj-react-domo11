import React, { useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react'; // Import only what's necessary

// Mock images for the carousel
const images = [
  'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/Rectangle_24_uwvmyb.png',
  'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/Rectangle_25_1_sto2lc.png',
  'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/Rectangle_26_1_umemmy.png',
];

// Mock additional products
const additionalProducts = [
  {
    name: 'Living Room Set',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/living_room_set.png',
    description: 'A beautiful living room set to enhance your space.',
  },
  {
    name: 'Dining Table',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/dining_table.png',
    description: 'Elegant dining table for memorable meals.',
  },
  {
    name: 'Office Chair',
    image: 'https://res.cloudinary.com/dfo4alc3w/image/upload/v1726415131/office_chair.png',
    description: 'Comfortable chair for your home office.',
  },
];

const Rooms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false); // State to control visibility of additional products
  const [autoSlide, setAutoSlide] = useState(true); // State to manage auto-sliding

  // Function to handle the next image in the carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setAutoSlide(false); // Stop auto-sliding on manual interaction
  };

  // Function to handle the previous image in the carousel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setAutoSlide(false); // Stop auto-sliding on manual interaction
  };

  // Auto-sliding effect using useEffect
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000); // Slide every 3 seconds
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount or autoSlide state change
  }, [autoSlide, currentIndex]);

  return (
    <div className="bg-[#F9F5F0] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section (Text and Button) */}
        <div className="lg:w-1/2 px-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            50+ Beautiful Rooms Inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button
            onClick={() => setShowMore(!showMore)} // Toggle showMore state on button click
            className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            {showMore ? 'Show Less' : 'Explore More'}
          </button>
        </div>

        {/* Right Section (Carousel) */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          {/* Carousel (Image slider) */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative flex">
              <div className="min-w-full">
                <Image
                  className="w-[500px] h-[580px] object-cover rounded-lg"
                  cloudName="dfo4alc3w"
                  publicId={images[currentIndex]}
                  alt={`Inspiration ${currentIndex + 1}`}
                >
                  <Transformation crop="scale" width="200" />
                </Image>
                <div className="absolute bottom-8 left-6 bg-white bg-opacity-75 px-4 py-2 rounded-md shadow-lg">
                  <p className="text-gray-700 text-sm">01 — Bed Room</p>
                  <h3 className="text-xl font-semibold text-gray-900">Inner Peace</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute top-1/2 right-20 mb-10 transform -translate-y-1/2 flex space-x-4">
            <button
              className="p-2 bg-white rounded-full hover:bg-gray-400 transition duration-300"
              onClick={handlePrev}
            >
              &larr;
            </button>
            <button
              className="p-2 bg-white rounded-full hover:bg-gray-400 transition duration-300"
              onClick={handleNext}
            >
              &rarr;
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-600' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Products Section */}
      {showMore && (
        <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {additionalProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                className="w-full h-60 object-cover"
                cloudName="dfo4alc3w"
                publicId={product.image}
                alt={product.name}
              >
                <Transformation crop="scale" width="500" />
              </Image>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
