import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo.webp";
import DarkModeLogo from "../../../public/DarkModeLogo.webp";
import {
  MdAccountBalanceWallet,
  MdClose,
  MdSearch,
  MdSunny,
} from "react-icons/md";
import { RiMenu5Line, RiCloseLine } from "react-icons/ri";
import {
  FaUser,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaMoon,
} from "react-icons/fa";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all 2xl:w-[1536px] duration-300 ease-in-out ${
        isScrolled ? "dark:bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-5 md:px-16 sm:px-12 h-20">
        {/* Logo */}
        <img
          src={darkMode ? Logo : DarkModeLogo}
          alt="Logo"
          className="w-28 text-black"
        />

        <div className=" hidden lg:flex items-center gap-2 bg-white dark:bg-white/10 hover:border-[#7A4CFF] hover:border dark:border-none border border-gray-300  rounded-2xl px-4 py-2 transition duration-300">
          <MdSearch className=" text-[#131740] dark:text-white text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-[#131740] dark:text-white placeholder:text-[#131740] placeholder:dark:text-white outline-none w-full"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-semibold dark:text-white items-center">
          {["Home", "Explore", "Create", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-[#7A4CFF] text-[#131740] dark:text-white cursor-pointer transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <MdAccountBalanceWallet className="hidden md:block dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition" />
          <FaUser className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition" />
          {darkMode ? (
            <MdSunny
              onClick={() => setDarkMode(!darkMode)}
              className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition"
            />
          ) : (
            <FaMoon
              onClick={() => setDarkMode(!darkMode)}
              className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition"
            />
          )}
          <div className="md:hidden">
            {menuOpen ? (
              <RiCloseLine
                onClick={() => setMenuOpen(false)}
                className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition"
              />
            ) : (
              <RiMenu5Line
                onClick={() => setMenuOpen(true)}
                className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition"
              />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-[#101436] backdrop-blur-sm w-full h-screen top-0 absolute text-white px-6 py-5 gap-6 md:hidden transition">
          <div className="flex  justify-between ">
            {" "}
            <img src={Logo} alt="Logo" className="w-28 h-8" />
            <MdClose
              onClick={() => setMenuOpen(false)}
              className="dark:bg-white/20 bg-[#777b7d05]  hover:bg-[#7A4CFF] dark:text-white rounded-full p-2 w-10 h-10 cursor-pointer transition"
            />
          </div>

          <div className="flex items-center gap-2 bg-white/10 border border-[#7A4CFF] rounded-2xl px-4 py-2">
            <MdSearch className="text-white text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-white outline-none w-full"
            />
          </div>
          <ul className="flex flex-col gap-4 text-sm font-semibold">
            {["Home", "Explore", "Create", "About", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#7A4CFF]  cursor-pointer transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className=" px-7 font-bold py-2 text-sm bg-[#7A4CFF] hover:bg-[#7a4cffa3] rounded-4xl cursor-pointer  transform translation-all duration-300 ease-in-out   "
          >
            Connect Wallet
          </button>

          <div className="flex items-center justify-center w-full gap-4 mt-6 border-t border-gray-500 pt-4">
            <FaTwitter
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            />
            <FaFacebook
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            />
            <FaInstagram
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            />
            <FaTiktok onClick={() => setMenuOpen(false)} className="text-2xl" />
            <FaDiscord
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
