import React from 'react'
import Storesidebar from './Storesidebar'
import StoreBanner from './Storebanner'
import VendorProducts from './VendorProducts'
import Storenavshop from './Storenavshop'

const Store = () => {
  return (
    <>
    <Storenavshop/>
     <div class="page-content mb-8">
                <div class="container">
                    <div class="row gutter-lg">
                        <Storesidebar/>

                    <div class="main-content">
                        <StoreBanner/>
                        <h2 class="title vendor-product-title mb-4"><a href="#">Products</a></h2>

                        {/* <div class="product-wrapper row cols-md-3 cols-sm-2 cols-2"> */}
                            <VendorProducts/>
                        {/* </div> */}


                    </div>

                    </div>
            </div>
    </div>
    </>
   
  )
}

export default Store
