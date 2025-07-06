import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#9e9b95]">
      <div className="container mx-auto">
        <div className="grid grid-cols-13 pt-8">
          <div className="col-span-13 sm:col-span-3 sm:col-start-2 text-center ">
            <div className="pb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Customer Care</div>
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">FAQ</a></div>
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Track your order</a></div>
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Returns</a></div>
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer">Contact us</div>
          </div>
          <div className="col-span-13 sm:col-span-3 sm:col-start-6 text-center ">
            <div className="pb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Information</div>
            {/* Target is used to specify the URL of the page the link goes to. */}
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></div> 
            <div className="pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">Size guide</a></div>
            <div className="sm:pb-0 pb-3 text-[10px] sm:text-sm cursor-pointer"><a href="http://" target="_blank" rel="noopener noreferrer">About us</a></div>
          </div>
          <div className="col-span-13 sm:col-span-3 sm:col-start-10 text-center ">
            <div className="pb-5 text-[15px] sm:text-xl font-bold text-[#223531]">Social</div>
            <div className="pb-3 text-2xl flex gap-3 justify-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="hover:text-pink-500"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="hover:text-blue-500"
                />
              </a>
              <a
                href="https://www.threads.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faThreads}
                  className="hover:text-black"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] sm:text-sm pb-7 font-bold text-[#223531] ">
          © 2025 All rights reserved. Designed by SayuriMalaviarachchi
        </div>
      </div>
    </div>
  );
};

export default Footer;
