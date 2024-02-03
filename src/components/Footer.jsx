import React from 'react'

const Footer = () => {
  return (
    <div className='bg-indigo-900 text-gray-300 p-10'>
          <div className='text-center md:flex-row mt-5 mb-5 md:flex md:items-center md:justify-between'>
              <div className='flex items-center flex-col gap-8'>
                  <div>
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/logo.svg" alt="" />
                  </div>
                  <div className='flex items-center gap-4 '> 
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/icon-facebook.svg" alt="" />
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/icon-youtube.svg" alt="" />
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/icon-twitter.svg" alt="" />
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/icon-pinterest.svg" alt="" />
                      <img src="./easybank-landing-page-master/easybank-landing-page-master/images/icon-i" alt="" />
                  </div>
              </div>
              <ul className='mt-2'>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Blog</li>
              </ul>
              <ul>
                  <li>Careers</li>
                  <li>Support</li>
                  <li>Privacy Policy</li>
              </ul>
              <div className='md:text-right'>
                  <button className='mt-5 bg-green-500 p-2 text-sm w-36 text-center text-white rounded-3xl'>Request Invite</button>
                  <p >Olaniyi. All Rights Reserved 2024</p>
              </div>
      </div>
    </div>
  )
}

export default Footer
