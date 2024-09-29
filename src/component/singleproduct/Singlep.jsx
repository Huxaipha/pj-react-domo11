import React, { useState } from 'react';

// Assuming the image is located locally or you have a URL for it
import Group106 from '../../assets/image/Group106.png'; // Update with the correct image path
import Group107 from '../../assets/image/Group107.png'; // Update with the correct image path


const Singlep = () => {
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="p-6">
      {/* Tabs Section */}
      <div className="flex space-x-8 border-b">
        <h2
          onClick={() => setActiveTab('Description')}
          className={`pb-2 cursor-pointer text-lg font-semibold ${activeTab === 'Description' ? 'border-b-2 border-black' : 'text-gray-500'}`}
        >
          Description
        </h2>
        <h3
          onClick={() => setActiveTab('Additional Information')}
          className={`pb-2 cursor-pointer text-lg font-semibold ${activeTab === 'Additional Information' ? 'border-b-2 border-black' : 'text-gray-500'}`}
        >
          Additional Information
        </h3>
        <h4
          onClick={() => setActiveTab('Reviews')}
          className={`pb-2 cursor-pointer text-lg font-semibold ${activeTab === 'Reviews' ? 'border-b-2 border-black' : 'text-gray-500'}`}
        >
          Reviews [5]
        </h4>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {activeTab === 'Description' && (
          <div>
            <h5 className="text-base font-medium">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </h5>
            <p className="mt-4 text-gray-600">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === 'Additional Information' && (
          <div>
            <p className="text-gray-600">Here you can add some additional information about the product.</p>
          </div>
        )}
        {activeTab === 'Reviews' && (
          <div>
            <p className="text-gray-600">Here are customer reviews for this product.</p>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <img src={Group106} alt="Product View 1" className="w-full h-auto object-cover rounded-lg" />
        <img src={Group107} alt="Product View 2" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Singlep;
