import React from 'react'

const Articles = () => {
    const ArticleSet = [
        {
            picture: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/image-confetti.jpg",
            title:'Recieve money in any currency with no fees',
            overview:'Our modern web and mobile applications allow you to keep track of your finaces wherever you are in the world',
            Author:'Claire Robinson'
        },{
            picture: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/image-currency.jpg",
            title:'Treat yourself without worrying about money',
            overview:'See exactly where your money goes each month. Recieve notifications when youre closse to hittnig limits',
            Author:'Wilson Hutton'
        },{
            picture: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/image-plane.jpg",
            title:'Take your Easybank card wherever you go',
            overview:"We don't do branches. Open your account in minutes online and start taking control of your finances right away",
            Author:'Claire Robinson'
        },{
            picture: "/src/assets/easybank-landing-page-master/easybank-landing-page-master/images/image-restaurant.jpg",
            title:'Our invite-only Beta accounts are now live!',
            overview:'Manage your savings,investments,pension, and nuch more from one account. Tracking your money has never been easier.',
            Author:'Wilson Hutton'
        }
    ]
  return (
    <div className='p-5'>
          <h3 className='ml-4'>Latest Articles</h3>
          <div className='md:flex items-center'>
              {ArticleSet.map((item) => {
                  return <div className='p-4'>
                      <img className='w-50' src={item.picture} alt="image" />
                      <span className='text-sm'>{item.Author}</span>
                      <p className='text-lg font-bold'>{item.title}</p>
                      <p>{item.overview}</p>
                  </div>
              })}
          </div>
    </div>
  )
}

export default Articles
