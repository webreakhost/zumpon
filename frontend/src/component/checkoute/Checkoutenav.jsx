import React from 'react'

const Checkoutenav = () => {
  return (
    <nav className="breadcrumb-nav">
    <div className="container">
        <ul className="breadcrumb shop-breadcrumb bb-no">
            <li className="passed"><a href="cart.html">Shopping Cart</a></li>
            <li className="active"><a href="checkout.html">Checkout</a></li>
            <li><a href="order.html">Order Complete</a></li>
        </ul>
    </div>
</nav>
  )
}

export default Checkoutenav
