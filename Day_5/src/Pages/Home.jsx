import React from 'react'
import bg from "../../public/bg.webp"
import hero from "../../public/hero.jpg"
import overFlowHero from "../../public/3D_elements.webp"
const Home = () => {
  return (
    <div className='relative w-full  flex justify-center items-center'>
      <div className='absolute inset-0 opacity-10'></div> <img src={bg} alt="" />
      <div className='absolute px-20 mt-20 w-full inset-0 flex justify-center items-center text-white text-4xl font-bold z-10'>
        <div className='w-1/2 flex flex-col gap-4'>
          <h1 className='text-7xl font-bold'>Bye,sell and collect NFTs.</h1>
          <p className='text-lg '>The world's largest digital marketplace for crypto collectibles and non-fungible tokens</p>
          <div className='flex gap-4'>
        <button className=''>Upload</button>
        <button>Explore</button>
          </div>
        </div>
        <div className='relative   w-1/2'>
          <img src={hero} alt="" className=' rotate-12 rounded-[35%] w-[40vw] ' />

          <img src={overFlowHero} alt="" className=' top-4 z-10 absolute ' />
        </div>

      </div>
     
    </div>
  )
}

export default Home