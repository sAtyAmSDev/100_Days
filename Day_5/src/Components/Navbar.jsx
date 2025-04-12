import React from 'react'
import Logo from "../../public/logo.webp"
const Navbar = () => {
    return (
        <div className=' absolute z-50 w-full px-20   flex justify-between items-center h-12 bg-white/ shadow-md'>

            <div className="logo">
                <img src={Logo} alt="" className='w-32' />
            </div>

        </div>
    )
}

export default Navbar