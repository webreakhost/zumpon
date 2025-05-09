import React from 'react';

const CheckoutAddress = () => {
  return (
    <div>
      <div className="login-toggle">
        Returning customer?{' '}
        <a href="#" className="show-login font-weight-bold text-uppercase text-dark">
          Login
        </a>
      </div>
      <form className="login-content">
        <p>
          If you have shopped with us before, please enter your details below. If you are a new customer, please proceed
          to the Billing section.
        </p>
        <div className="row">
          <div className="col-xs-6">
            <div className="form-group">
              <label>Username or email *</label>
              <input type="text" className="form-control form-control-md" name="name" required />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label>Password *</label>
              <input type="password" className="form-control form-control-md" name="password" required />
            </div>
          </div>
        </div>
        <div className="form-group checkbox">
          <input type="checkbox" className="custom-checkbox" id="remember" name="remember" />
          <label htmlFor="remember" className="mb-0 lh-2">
            Remember me
          </label>
          <a href="#" className="ml-3">
            Lost your password?
          </a>
        </div>
        <button className="btn btn-rounded btn-login">Login</button>
      </form>
      <div className="coupon-toggle">
        Have a coupon?{' '}
        <a href="#" className="show-coupon font-weight-bold text-uppercase text-dark">
          Enter your code
        </a>
      </div>
      <div className="coupon-content mb-4">
        <p>If you have a coupon code, please apply it below.</p>
        <div className="input-wrapper-inline">
          <input
            type="text"
            name="coupon_code"
            className="form-control form-control-md mr-1 mb-2"
            placeholder="Coupon code"
            id="coupon_code"
          />
          <button type="submit" className="btn button btn-rounded btn-coupon mb-2" name="apply_coupon" value="Apply coupon">
            Apply Coupon
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;

