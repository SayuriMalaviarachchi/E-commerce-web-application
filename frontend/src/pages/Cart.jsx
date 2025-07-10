import React, { useState } from "react";
import product from '../assets/productCard/top1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faX } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const price = 1300;
  const subTotal = quantity * price;

  return (
    <div className="bg-[#d9d7d1] min-h-screen py-6">
      <div className="container mx-auto px-5">
        <div className="text-2xl font-bold mb-4 text-[#223531]">Cart</div>
        <div className="grid grid-cols-12 gap-4">
          {/* Left Section */}
          <div className="col-span-12 lg:col-span-8 overflow-x-auto sm;:overflow-x-visible">
            <div className="min-w-[600px]">
              <table className="w-full text-left">
              <thead>
                <tr className="grid grid-cols-12 font-semibold text-[#223531] border-b py-2">
                  <th className="col-span-6">Product</th>
                  <th className="col-span-2">Price</th>
                  <th className="col-span-2">Quantity</th>
                  <th className="col-span-2">Sub Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid grid-cols-12 items-center py-4 border-b">
                  {/* Product Info */}
                  <td className="col-span-6 flex items-center gap-4">
                    <button className="text-red-600">
                      <FontAwesomeIcon icon={faX} />
                    </button>
                    <img src={product} className="w-20 h-20 object-cover rounded" alt="" />
                    <div className="text-sm">
                      <div className="font-semibold text-[#223531]">High Rise Wide Leg Jeans</div>
                      <div className="text-xs text-[#435b56]">(25 / pink)</div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="col-span-2 flex items-center">LKR {price}</td>

                  {/* Quantity Controls */}
                  <td className="col-span-2 flex items-center gap-2">
                    <button
                      onClick={decreaseQty}
                      className="bg-[#223531] text-white px-2 py-1 rounded hover:bg-[#1a2b22]"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="font-semibold">{quantity}</span>
                    <button
                      onClick={increaseQty}
                      className="bg-[#223531] text-white px-2 py-1 rounded hover:bg-[#1a2b22]"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </td>

                  {/* Subtotal */}
                  <td className="col-span-2 font-semibold">LKR {subTotal}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          {/* Right Section (e.g., Summary) */}
          <div className="col-span-12 lg:col-span-4 bg-[#f5f4f0] p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-2 text-[#223531]">Order Summary</h2>
            <p className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>LKR {subTotal}</span>
            </p>
            <p className="flex justify-between text-sm mt-1">
              <span>Shipping:</span>
              <span>Free</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between font-semibold text-[#223531]">
              <span>Total:</span>
              <span>LKR {subTotal}</span>
            </p>
            <button className="w-full mt-4 bg-[#223531] text-white py-2 rounded hover:bg-[#1a2b22] font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;