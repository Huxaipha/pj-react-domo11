import React from 'react';

const Contactfooter = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container mx-auto px-4 py-8">
        
        {/* Horizontal line above branding */}
        <hr className="my-8 border-gray-300" />

        <div className="md:flex md:justify-between">
          {/* Branding and Address */}
          <div>
            <h2 className="font-bold text-xl text-left mb-2">Funiro.</h2>
            <p className="text-sm text-left">
              400 University Drive Suite 200 Coral Gables,<br/>
              FL 33134 USA
            </p>
          </div>
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 text-left md:grid-cols-3 lg:grid-cols-4 mt-4 md:mt-0">
            <div>
              <h3 className="font-semibold">Links</h3>
              <ul>
                <li><a href="/" className="text-sm hover:text-gray-900">Home</a></li>
                <li><a href="/shop" className="text-sm hover:text-gray-900">Shop</a></li>
                <li><a href="/about" className="text-sm hover:text-gray-900">About</a></li>
                <li><a href="/contact" className="text-sm hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Help</h3>
              <ul>
                <li><a href="/payment" className="text-sm hover:text-gray-900">Payment Options</a></li>
                <li><a href="/returns" className="text-sm hover:text-gray-900">Returns</a></li>
                <li><a href="/privacy" className="text-sm hover:text-gray-900">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2">
              <h3 className="font-semibold">Newsletter</h3>
              <form action="#" method="POST" className="mt-2">
                <input
                  type="email"
                  className="p-2 text-sm w-full border-gray-300 rounded-md"
                  placeholder="Enter Your Email Address"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-black text-white p-2 rounded-md hover:bg-gray-800"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Horizontal line before copyright */}
        <hr className="my-8 border-gray-300" />

        <div className="text-left text-sm">
          © 2023 Funiro. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Contactfooter;
