import React, { useState } from "react";
import Logo from "../../../public/logo.webp";
import DarkModeLogo from "../../../public/DarkModeLogo.webp";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
 const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="dark:bg-[#0d102d] bg-white text-[#131740] dark:text-white p-5 md:1 px-5 md:px-16 sm:px-12 md:pt-24 pb-7  2xl:w-[1536px] ">
      <div className="flex flex-wrap gap-10 sm:gap-50  ">
        <div className="flex flex-col gap-4 w-full sm:w-1/3 ">
          <img  src={darkMode ? DarkModeLogo : Logo} alt="" className="w-48 " />

          <p className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
            Create, sell and collect truly rare digital artworks. Powered by
            blockchain technology.
          </p>
          <div className="flex gap-4 mt-4">
            <FaTwitter className="text-2xl text-[#131740] dark:text-white" />
            <FaFacebook className="text-2xl text-[#131740] dark:text-white" />
            <FaInstagram className="text-2xl text-[#131740] dark:text-white" />
            <FaTiktok className="text-2xl text-[#131740] dark:text-white" />
            <FaDiscord className="text-2xl text-[#131740] dark:text-white" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-20  ">
          <ul className="flex flex-col gap-3">
            <h1 className="text-md font-bold text-[#131740] dark:text-white ">
              Marketplace
            </h1>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              All NFTs
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Art
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Music
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Domain Names
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Collections
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Virtual
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h1 className="text-md font-bold text-[#131740] dark:text-white ">
              Company
            </h1>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Explore
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              About
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Contact Us
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Our Blog
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              FAQ
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <h1 className="text-md font-bold text-[#131740] dark:text-white ">
              Marketplace
            </h1>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Authors
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Collection
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Author Profile
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-sm cursor-pointer hover:text-white ">
              Create Item
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10 border-t border-gray-600 pt-5">
        <p className="text-sm text-gray-500 dark:text-gray-400 ">
          © 2025 Xhibiter — Made by Satyam
        </p>
        <div className="flex gap-10">
          <p className="text-xs text-gray-500 dark:text-gray-400 hover:text-white ">
            Terms and conditions
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 hover:text-white ">
            Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
