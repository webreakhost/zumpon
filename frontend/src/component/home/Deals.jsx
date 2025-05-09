import React from 'react'
import SingleProduct from './Singleproduct'
import Adds from './Adds'
import Addsprd from './Addsprd'

const Deals = () => {
  return (
    <div class="row deals-wrapper appear-animate mb-8 ">
        <div class="col-lg-9 mb-4">
            <SingleProduct/>


        </div>
        {/* <div class="col-lg-3 mb-4"> */}
            {/* <Adds/> */}
            <Addsprd/>

        {/* </div> */}

    </div>
  )
}

export default Deals
