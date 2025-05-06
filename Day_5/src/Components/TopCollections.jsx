import useFetchNFT from "../Hooks/useFetchNFT";

const TopCollections = () => {
  const { NFTArray, setNFTArray } = useFetchNFT();
  return (
    <div className="w-full flex flex-col justify-center items-center dark:bg-[#101436] px-5 md:px-16 sm:px-12  py-16    ">
      <h2 className="text-center text-3xl font-bold text-[#131740] dark:text-white ">
        Top Collections Over{" "}
        <select
          name=""
          id=""
          className=" text-[#7A4CFF] text-xl bg-transparent border-none outline-none rounded-md p-2 ml-2"
        >
          <option
            value=""
            className=" bg-[#0d102d] text-sm font-semibold border-none outline-none "
          >
            Last 24 Hours
          </option>
          <option
            value=""
            className=" bg-[#0d102d] text-sm font-semibold border-none outline-none "
          >
            Last 7 Days
          </option>
          <option
            value=""
            className=" bg-[#0d102d] text-sm font-semibold border-none outline-none "
          >
            Last 30 Days
          </option>
        </select>{" "}
      </h2>
      <div className="collection-list w-full flex flex-wrap gap-5 justify-center items-center mt-10 mb-10  ">
        {/* Collection items will be rendered here */}
        {NFTArray.map((nft, index) => (
          <div
            className="collection-item w-full md:w-85 flex justify-start gap-2 items-center px-4 py-2 rounded-xl dark:border-none border border-gray-300   dark:bg-[#131740] bg-[#777b7d05]  "
            key={index}
          >
            <div className="relative">
              <span className="absolute left-[-10%] bg-[#0d102c] flex justify-center items-center border border-gray-400 text-sm top-[25%]  w-5 h-5 rounded-full text-white ">
                {++index}
              </span>
              <img src={nft.result.collection_logo} alt="" className="w-12  " />
            </div>
            <div>
              <h2 className="text-[#131740] dark:text-white font-bold text-md ">
                {nft.result.name}{" "}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-sm   ">
                {" "}
                {nft.result.floor_price} ETH
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="px-7  py-2 text-md font-semibold text-white bg-[#7A4CFF] hover:bg-[#7a4cffa3] rounded-4xl cursor-pointer  transform translation-all duration-300 ease-in-out  ">
        Go to Ranking
      </button>
    </div>
  );
};

export default TopCollections;
