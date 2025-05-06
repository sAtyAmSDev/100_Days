import useFetchNFT from "../Hooks/useFetchNFT";
import { MdAccountBalanceWallet, MdSearch, MdSunny } from "react-icons/md";

const CreateAndSellInfo = () => {
  const { NFTArray, setNFTArray } = useFetchNFT();
  return (
    <div className="w-full flex flex-col justify-center items-center dark:bg-[#0d102d]    px-5 md:px-16 sm:px-12  py-16      ">
      <h2 className="text-3xl font-bold text-[#131740]  dark:text-white  ">
        Create and sell your NFTs
      </h2>
      <div className="w-full  flex flex-wrap  justify-center gap-10 mt-10 ">
        {new Array(4).fill(null).map((itm, index) => {
          return (
            <div className=" w-full sm:w-72 p-3 rounded-xl text-[#131740]  dark:text-white  flex flex-col gap-4 justify-center items-center ">
              <MdAccountBalanceWallet className="text-6xl bg-white/80 rounded-full text-purple-500 p-2 " />
              <h2 className="text-xl font-semibold ">
                {++index}. Set up your wallet
              </h2>
              <p className=" text-center text-md text-gray-500 dark:text-gray-400  ">
                Once you've set up your wallet of choice, connect it to
                OpenSeaby clicking the NFT Marketplace in the top right corner.
              </p>
            </div>
          );
        })}
      </div>
      <div className=" w-full md:w-[70%]  flex flex-wrap  justify-center gap-5 mt-10 ">
        <p className="md:text-center text-md font-semibold  text-[#131740]  dark:text-white     ">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating Xhibiter
        </p>
        <div className="flex w-full md:w-[70%]   items-center gap-2 dark:bg-[#321e6d17] backdrop-blur-2xl border border-[#7A4CFF] hover:border-[#7A4CFF] hover:border  rounded-4xl px-4 py-2 ">
          <input
            type="email"
            className="bg-transparent outline-none text-sm border-none w-full h-full text-[#131740]  dark:text-white  placeholder:text-[#131740]  placeholder:dark:text-white  "
            placeholder="Email Address"
          />
          <button className="text-[#131740]  dark:text-white  text-sm bg-[#7A4CFF] hover:bg-[#7a68b3] transform translation-all duration-300  cursor-pointer py-2 rounded-full  px-6 font-semibold ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAndSellInfo;
