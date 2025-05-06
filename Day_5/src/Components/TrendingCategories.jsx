import useFetchNFT from "../Hooks/useFetchNFT";

const TrendingCategories = () => {
  const { NFTArray, setNFTArray } = useFetchNFT();
  return (
    <div className=" w-full flex flex-col justify-center items-center dark:bg-[#0d102d] px-5 md:px-16 sm:px-12 py-16  ">
      <h2 className="text-3xl font-bold text-[#131740]  dark:text-white  ">⚡Trending Categories</h2>

      <ul className="flex flex-wrap gap-4 justify-center items-center mt-10   ">
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
          All
        </li>
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         🎨 Art
        </li>
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         🗃️ Collectibles
        </li>
      
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         🎵 Music
        </li>
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         📸 Photography
        </li>
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         🏑 Sports
        </li>
        <li className=" px-3 py-1 w-min rounded-md text-nowrap hover:bg-[#7A4CFF] cursor-pointer transform translation-all duration-400  border border-[#7A4CFF] text-sm text-[#131740]  dark:text-white  font-semibold  ">
         💹 Trading Cards
        </li>
       
      </ul>
      <div className="collection-list w-full flex flex-wrap gap-5 justify-center items-center mt-10 mb-10">
        {NFTArray.map((nft, index) => (
          <div
            key={index}
            className="dark:bg-[#131740] bg-[#777b7d05]  dark:border-none border border-gray-300 w-82 h-full rounded-2xl flex p-3 gap-5 flex-col  "
          >
            <img
              src={nft.result.collection_banner_image}
              alt=""
              className="w-full   rounded-md"
            />
            <div className="flex flex-col gap-1 w-full mb-10 ">
              <div className="flex flex-row  justify-between items-center w-full mt-2">
                <h2 className="text-[#131740]  dark:text-white  text-xl font-semibold">
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
              <p className="text-[#131740]  dark:text-white  text-sm mt-2">
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
        ))}
      </div>
    </div>
  );
};

export default TrendingCategories;
