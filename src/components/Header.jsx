import React from 'react';

const Header = () => {
  return (
    <div className='p-6 overflow-hidden'>
      <div className='relative h-screen'>
        <div className='absolute top-0 z-0 md:relative md:-top-60 md:left-96 md:max-w-70'>
          <img
            className='md:w-screen'
            src="./easybank-landing-page-master/easybank-landing-page-master/images/bg-intro-desktop.svg"
            alt="background"
          />
        </div>

        <div className='relative flex flex-col-reverse items-center md:px-10 md:flex-row z-40 md:max-w-100 md:max-h-100 md:absolute top-0'>
          <div className='text-center md:text-left '>
            <h1 className='text-4xl'>Next generation <br /> digital banking</h1>
            <p className='text-sm mt-4 md:w-1/2'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
              saving, budgeting, investing, and much more.
            </p>
            <button className='mt-5 bg-green-500 p-2 text-sm w-36 text-center text-white rounded-3xl'>Request Invite</button>
          </div>

          <div>
            <img className='sm:w-80 lg:w-full' src="./easybank-landing-page-master/easybank-landing-page-master/images/image-mockups.png" alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
