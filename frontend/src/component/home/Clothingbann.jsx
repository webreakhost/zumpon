import React from 'react'
import Banner2 from './Banner2'
import Fashion from './Fashion'

const Clothingbann = () => {
  return (
    <div class="product-wrapper-1 appear-animate mb-5">
        <div className="title-link-wrapper pb-1 mb-4">
                        <h2 className="title ls-normal mb-0">Clothing & Apparel</h2>
                        <a href="shop-boxed-banner.html" className="font-size-normal font-weight-bold ls-25 mb-0">More
                            Products<i className="w-icon-long-arrow-right"></i></a>
        </div>
        <div class="row">
            <Banner2/>
            <Fashion/>
        </div>

    </div>
  )
}

export default Clothingbann
