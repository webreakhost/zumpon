import React from 'react'
import Homeintro from './Homeintro'
import Homeswipe from './Homeswipe'
// import Catogryba from './CategoryBanner'
import CategoryBanner from './CategoryBanner'
import Categorymonth from './Categorymonth'
import Populardeprt from './Populardeprt'
import Homeintroo from './Homeintroo'
import Deals from './Deals'
import Banner1 from './Banner1'
import Clothingbann from './Clothingbann'
import Banner3 from './Banner3'
import Ourclient from './Ourclient'
import Fromblog from './Fromblog'
import Introsec from './Introsec'

const Home = () => {
  return (
    <div className="home">
      <div className="page-wrapper">
        <main className="main">
          
          {/* <Homeintroo/> */}
          <div className="hidden lg:block">
        {/* <IntrosecDesktop /> */}
        <Homeintroo/>
      </div>
          <div className="block lg:hidden">
        {/* <IntrosecMobile /> */}
        <Introsec/>
      </div>
          
          <div className="container">
            <Homeswipe />
            
            <Deals/>
            <Categorymonth/>
            <Populardeprt/>
            <Banner1/>
            <Clothingbann/>
            <Banner3/>
            <Ourclient/>
            <Fromblog/>
          </div>

        </main>

      </div>


    </div>

  )
}

export default Home
