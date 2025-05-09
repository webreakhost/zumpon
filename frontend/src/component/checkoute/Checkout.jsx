import React from 'react'
import Checkoutenav from './Checkoutenav'
import CheckoutAddress from './checkoutaddres'
import CheckoutBil from './CheckoutBil'

const Checkout = () => {
  return (
    <>
    <Checkoutenav/>
    <div className="page-content">
    <div className="container">
        <CheckoutAddress/>
        <CheckoutBil/>
        

    </div>

    </div>
    </>
  )
}

export default Checkout
