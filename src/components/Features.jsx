import React from 'react'

const Features = () => {
    const featuresSet = [
        {
            icon: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/icon-online.svg",
            title:'Online Banking',
            overview:'Our modern web and mobile applications allow you to keep track of your finaces wherever you are in the world'
        },{
            icon: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/icon-budgeting.svg",
            title:'Simple Budgeting',
            overview:'See exactly where your money goes each month. Recieve notifications when youre closse to hittnig limits'
        },{
            icon: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/icon-onboarding.svg",
            title:'Fast Onboarding',
            overview:"We don't do branches. Open your account in minutes online and start taking control of your finances right away"
        },{
            icon: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/icon-online.svg",
            title:'Open Api',
            overview:'Manage your savings,investments,pension, and nuch more from one account. Tracking your money has never been easier.'
        }
    ]
  return (
      <div className='bg-gray-100 '>
          <div className='p-4'>
              <div className='text-center md:ml-10 mt-20'>
              <h2 className=' text-4xl'>Why chose Easybank</h2>
              <p className='mt-5'>We leverage Open Banking to turn your bank acount into your financial hub. <br />
                  Control your finances like never before.
                  </p>
                  </div>
              <div className='md:flex md:p-4'>
                
                      {featuresSet.map((item) => {
                          return <div className='p-8 flex flex-col items-center md:block'>
                              <img className='mb-4' src={item.icon} alt="" />
                              <span className='text-2xl'>{item.title}</span>
                              <p className='text-center md:text-left mt-3'>{item.overview}</p>
                          </div>
                    })}
              </div>
              </div>
      </div>
    
  )
}

export default Features
