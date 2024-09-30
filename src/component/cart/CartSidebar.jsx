import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ isOpen, toggleSidebar, cartItems = [], removeFromCart, totalAmount }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigation = (path) => {
    toggleSidebar(); // Close the sidebar
    navigate(path, { state: { cart: cartItems } }); // Navigate to the specified path with cart state
  };

  return (
    <>
      {/* Overlay Section */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar} // Close sidebar when clicking outside
      />

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 right-0 bg-white shadow-xl w-[25vw] transition-transform transform rounded-lg z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)' }} // Limit the height to prevent overflow
      >
        {/* Header Section */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={toggleSidebar}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Items Section */}
        <div className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.name} className="flex justify-between items-center">
                {/* Product Image and Details */}
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.quantity} x {item.price}</p>
                  </div>
                </div>
                {/* Remove Button */}
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.name)} // Use name instead of id
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Section */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal:</span>
              <span>Rs. {totalAmount}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between space-x-2">
              <button onClick={() => handleNavigation('/cart')} className="w-full border border-black rounded-full py-2">Cart</button>
              <button onClick={() => handleNavigation('/checkout')} className="w-full border border-black rounded-full py-2">Checkout</button>
              <button onClick={() => handleNavigation('/compare')} className="w-full border border-black rounded-full py-2">Comparison</button> {/* Fixed route to '/compare' */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
