import React, { useEffect, useState } from "react";
import bg from "../../public/bg.webp";
import DarkModeBG from "../../public/DarkModeBG.webp";
import hero from "../../public/hero.jpg";
import overFlowHero from "../../public/3D_elements.webp";
import HotBids from "../Components/HotBids.jsx";
import TopCollections from "../Components/TopCollections.jsx";
import TrendingCategories from "../Components/TrendingCategories.jsx";
import CreateAndSellInfo from "../Components/CreateAndSellInfo.jsx";
const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="relative w-full  overflow-hidden  flex flex-col gap-20 md:gap-5 bg-white dark:bg-[#0d102d] 2xl:w-[1536px] justify-center items-center  ">
      <div className="relative w-full  h-[40pc]   flex justify-center items-center">
        {/* <div className="absolute inset-0  opacity-10"></div>{" "} */}
        <img
          src={darkMode ? bg : DarkModeBG}
          alt=""
          className=" hidden dark:flex absolute object-cover w-full  top-0 "
        />
        <div className="absolute  mt-30 sm:mt-50 md:mt-20 w-full top-0 gap-20 md:gap-10 inset-0 flex flex-col md:flex-row justify-center items-center text-white  z-10 px-5 md:px-16 sm:px-12 ">
          <div className="md:w-1/2  md:text-start text-center flex flex-col gap-8">
            <h1 className=" md:text-5xl text-4xl dark:text-white text-[#131740]   font-bold">
              Bye,sell and collect NFTs.
            </h1>
            <p className="text-md text-gray-500 dark:text-gray-400  ">
              The world's largest digital marketplace for crypto collectibles
              and non-fungible tokens
            </p>
            <div className="flex w-full md:justify-start justify-center  gap-4">
              <button className="px-7 font-bold py-2 text-sm bg-[#7A4CFF] hover:bg-[#7a4cffa3] dark:shadow-none shadow-xs shadow-[#7A4CFF] rounded-4xl cursor-pointer  transform translation-all duration-300 ease-in-out  ">
                Upload
              </button>
              <button className="px-7 font-bold py-2 text-sm bg-[#777b7d05] dark:border-none border border-gray-300 rounded-4xl text-gray-400 cursor-pointer hover:bg-[#7A4CFF] hover:text-white   transform translation-all duration-300 ease-in-out  ">
                Explore
              </button>
            </div>
          </div>

          <div className="relative w-full flex justify-center   md:w-1/2">
            <img
              src={hero}
              alt=""
              className=" rotate-12 md:rounded-[200px] w-[90%] rounded-4xl sm:w-[60vw]  md:w-[35vw] lg:w-[30pc]  "
            />

            <img
              src={overFlowHero}
              alt=""
              className=" sm:top-4 z-10 absolute w-full  animate-bounce-ease "
            />
          </div>
        </div>
      </div>

      <HotBids />
      <TopCollections />
      <TrendingCategories />
      <CreateAndSellInfo />
    </div>
  );
};

export default Home;
