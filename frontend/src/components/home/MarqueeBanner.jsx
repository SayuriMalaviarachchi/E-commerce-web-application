import React from "react";

function MarqueeBanner() {
  return (
    <>
      <style>
        {`
          @keyframes marqueeLoop {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="h-10  overflow-hidden whitespace-nowrap flex items-center p-5">
        <div
          className="flex animate-marquee "
          style={{
            animation: "marqueeLoop 50s linear infinite",
          }}
        >
          {/* Text repeated twice for looping */}
          <span className="text-xl font-semibold mr-10">
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/- &nbsp;&nbsp;
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/- &nbsp;&nbsp;
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/-
          </span>
          <span className="text-xl font-semibold mr-10">
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/- &nbsp;&nbsp;
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/- &nbsp;&nbsp;
            FREE DELIVERY FOR ORDERS ABOVE LKR. 10000/-
          </span>
        </div>
      </div>
    </>
  );
}

export default MarqueeBanner;