import React from 'react';
import TrophyIcon from '../../assets/image/Trophyicon.svg';
import ShieldCheckIcon from '../../assets/image/Shieldcheckicon.svg';
import TruckIcon from '../../assets/image/Truckicon.svg';
import HeadsetIcon from '../../assets/image/Headseticon.svg';

const Contacteatures = () => {
  return (
    <div className="bg-[#fbf7f2] py-10">
      <div className="container mx-auto flex justify-between  items-start  space-x-10">
        <div className="flex items-center space-x-4">
          <img src={TrophyIcon} alt="High Quality" className="h-8 w-8" />
          <div>
            <h4 className="text-black flex items-start font-semibold">High Quality</h4>
            <p className="text-gray-500 flex items-start">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <img src={ShieldCheckIcon} alt="Warranty Protection" className="h-8 w-8" />
          <div>
            <h4 className="text-black flex items-start font-semibold">Warranty Protection</h4>
            <p className="text-gray-500 flex items-start">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={TruckIcon} alt="Free Shipping" className="h-8 w-8" />
          <div>
            <h4 className="text-black font-semibold flex items-start">Free Shipping</h4>
            <p className="text-gray-500 flex items-start">Order over $150</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={HeadsetIcon} alt="24/7 Support" className="h-8 w-8" />
          <div>
            <h4 className="text-black font-semibold flex items-start">24 / 7 Support</h4>
            <p className="text-gray-500 flex items-start">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacteatures;
