import React, { useState } from "react";
import Img from "../assets/productCard/top1.jpeg";
import { Description } from "@headlessui/react";
function SingleProduct() {
  const product = {
    id: 11,
    name: "High Rise Wide Leg Jean",
    price: 4500,
    size: ["22", "23", "24"],
    description:
      "A high-rise jean with a wide leg, perfect for a trendy and comfortable look.",
    colour: ["red", "green", "Dark blue"],
  };
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColour, setSelectedColour] = useState(null);
  const canAddToCart = selectedSize && selectedColour;

  return (
    <div className="bg-[#d9d7d1] py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 px-5 ">
          {/* Image Section */}
          <div className="md:col-span-6 col-span-12 h-150 bg-[#d9d7d1] flex justify-center items-center">
            <img src={Img} className="w-150 h-150" alt="" />
          </div>

          {/* Details Section */}
          <div className="md:col-span-6 col-span-12 bg-[#d9d7d1] p-6 space-y-4">
            <div className="text-4xl font-bold text-[#223531]">
              {product.name}
            </div>
            <div className="text-lg font-semibold text-[#223531]">
              LKR {product.price}.00
            </div>
            <div className="text-sm text-[#223531] pb-3">
              All sizes mentioned in inches
            </div>
            <div className="text-sm text-[#223531] pb-10">
              {product.description}
            </div>

            {/* Sizes */}
            <div>
              <div className="font-semibold mb-2 text-[#223531]">Size</div>
              <div className="flex gap-2 flex-wrap">
                {product.size.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-4 py-1 border rounded-md text-sm font-semibold
                      ${
                        selectedSize === sz
                          ? "bg-[#223531] text-white"
                          : "bg-white hover:bg-gray-200 text-[#223531]"
                      }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Colours */}
            <div>
              <div className="font-semibold mb-2 text-[#223531]">Colour</div>
              <div className="flex gap-2 flex-wrap">
                {product.colour.map((clr) => (
                  <button
                    onClick={() => setSelectedColour(clr)}
                    className={`h-8 rounded-md px-3 font-semibold border ${
                      selectedColour === clr
                        ? "bg-[#223531] text-white"
                        : "bg-white hover:bg-gray-200 text-[#223531]"
                    }`}
                    title={clr}
                  >
                    {clr}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-14">
              <button
                type="submit"
                disabled={!canAddToCart}
                className={`w-36 h-9 rounded-lg font-bold transition duration-200
      ${
        canAddToCart
          ? "bg-[#223531] text-white hover:scale-105 cursor-pointer"
          : "bg-gray-400 text-white cursor-not-allowed"
      }
    `}
              >
                ADD TO CART
              </button>
              <button
                type="submit"
                disabled={!canAddToCart}
                className={`w-32 h-9 rounded-lg font-bold transition duration-200
      ${
        canAddToCart
          ? "bg-[#435b56] text-white hover:scale-105 cursor-pointer"
          : "bg-gray-400 text-white cursor-not-allowed"
      }
    `}
              >
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
