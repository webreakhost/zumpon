



import React from 'react';

const CheckoutBil = () => {
    return (
        <form className="form checkout-form" action="#" method="post">
            <div className="row mb-9">
                <div className="col-lg-7 pr-lg-4 mb-4">
                    <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">Billing Details</h3>
                    <div className="row gutter-sm">
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>First name *</label>
                                <input type="text" className="form-control form-control-md" name="firstname" required />
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="form-group">
                                <label>Last name *</label>
                                <input type="text" className="form-control form-control-md" name="lastname" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Company name (optional)</label>
                        <input type="text" className="form-control form-control-md" name="company-name" />
                    </div>
                    <div className="form-group">
                        <label>Country / Region *</label>
                        <div className="select-box">
                            <select name="country" className="form-control form-control-md">
                                <option value="default" selected>United States (US)</option>
                                <option value="uk">United Kingdom (UK)</option>
                                <option value="fr">France</option>
                                <option value="aus">Australia</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Street address *</label>
                        <input type="text" placeholder="House number and street name" className="form-control form-control-md mb-2" name="street-address-1" required />
                        <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="form-control form-control-md" name="street-address-2" required />
                    </div>
                    <div className="row gutter-sm">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Town / City *</label>
                                <input type="text" className="form-control form-control-md" name="town" required />
                            </div>
                            <div className="form-group">
                                <label>ZIP *</label>
                                <input type="text" className="form-control form-control-md" name="zip" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>State *</label>
                                <div className="select-box">
                                    <select name="state" className="form-control form-control-md">
                                        <option value="default" selected>California</option>
                                        <option value="uk">United Kingdom (UK)</option>
                                        <option value="fr">France</option>
                                        <option value="aus">Australia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone *</label>
                                <input type="text" className="form-control form-control-md" name="phone" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-7">
                        <label>Email address *</label>
                        <input type="email" className="form-control form-control-md" name="email" required />
                    </div>
                </div>
                <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                    <div className="order-summary-wrapper sticky-sidebar">
                        <h3 className="title text-uppercase ls-10">Your Order</h3>
                        <div className="order-summary">
                            <table className="order-table">
                                <thead>
                                    <tr>
                                        <th colSpan="2"><b>Product</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bb-no">
                                        <td className="product-name">Palm Print Jacket <span className="product-quantity">1</span></td>
                                        <td className="product-total">$40.00</td>
                                    </tr>
                                    <tr className="bb-no">
                                        <td className="product-name">Brown Backpack <span className="product-quantity">1</span></td>
                                        <td className="product-total">$60.00</td>
                                    </tr>
                                    <tr className="cart-subtotal bb-no">
                                        <td><b>Subtotal</b></td>
                                        <td><b>$100.00</b></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="order-total">
                                        <th><b>Total</b></th>
                                        <td><b>$100.00</b></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="form-group place-order pt-6">
                            <button type="submit" className="btn btn-dark btn-block btn-rounded">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CheckoutBil;
