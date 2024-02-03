import React from 'react'
import { useState } from 'react'


const Navbar = () => {
  const [Overlay, setOverlay] = useState(true);
  function toggleNav() {
    setOverlay(!Overlay)
  }
  return (
    <div className='p-3  bg-white'>
          <div className='flex items-center justify-between md:sticky md:top-0 relative'>
              <div>
                  <img src="./easybank-landing-page-master/easybank-landing-page-master/images/logo.svg" alt="logo" />
              </div>

        <ul className={`${Overlay ? 'hidden' : ''} rounded-lg text-xl gap-2 z-50 w-full h-60 flex items-center justify-center flex-col list-none absolute top-10 bg-gray-100 text-center md:top-0 md:relative  md:flex-row  md:w-full md:h-0  md:flex md:gap-5`}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>Careers</li>
              </ul>

              <div>
          <img className='cursor-pointer md:hidden' onClick={toggleNav} src={Overlay ? "./easybank-landing-page-master/easybank-landing-page-master/images/icon-hamburger.svg" : "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/icon-close.svg"} alt="hamburger" />
          <button className='hidden md:block bg-green-500 p-2 text-sm w-36 text-center text-white rounded-3xl'>Request Invite</button>
    </div>
      </div>
    </div>
  )
}

export default Navbar
