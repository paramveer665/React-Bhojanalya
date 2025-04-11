import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-blue-300 p-4">
      <FiShoppingCart className="text-6xl mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-center text-sm mb-4">
        Looks like you haven't added anything to your cart yet.
      </p>
    </div>
  );
};

export default EmptyCart;
