import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import useFetchNFT from "../Hooks/useFetchNFT";
const HotBids = () => {
  const { NFTArray, setNFTArray } = useFetchNFT();
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center dark:bg-[#0d102d]  my-20  px-5 md:px-16 sm:px-12    ">
      <h1 className=" text-3xl font-bold text-[#131740]  dark:text-white ">🔥Hot Bids</h1>

      <div className=" flex   w-full">
        <Swiper
         
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          loop={true}
          autoplay={true}
          breakpoints={{
            320: {
              slidesPerView: 1, 
            },
            480: {
              slidesPerView: 1.5, 
            },
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 2.5, 
            },
            1205: {
              slidesPerView: 3.5, 
            },
          }}
        >
          {NFTArray.map((nft, index) => (
            <SwiperSlide
              key={index}
              className="dark:bg-[#131740] bg-[#777b7d05] dark:border-none border border-gray-300 w-full  sm:w-52 h-70 rounded-2xl flex p-3 gap-5 flex-col  "
            >
              <div className=" flex flex-col gap-4 ">
                <img
                  src={nft.result.collection_banner_image}
                  alt=""
                  className="w-full  rounded-md"
                />
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row  justify-between items-center w-full mt-2">
                    <h2 className="text-[#131740] dark:text-white text-md sm:text-xl font-semibold">
                      {nft.result.name}{" "}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-nowrap text-xs border border-[#7A4CFF]/50 rounded-sm p-1 ">
                      🔷{" "}
                      <span className="text-emerald-500">
                        {nft.result.list_price.price} ETH
                      </span>
                    </p>
                  </div>
                  {/*  */}
                  <p className="text-white text-sm mt-2">
                    {nft.result.twitter_username}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm ">
                    Current Value :{" "}
                    <span className="text-[#7A4CFF]">
                      {" "}
                      {nft.result.floor_price}
                    </span>
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">
                    Block No :{" "}
                    <span className="text-[#7A4CFF]">
                      {nft.result.block_number}
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotBids;
