


import React from 'react'
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import Context from '../../context/index';

const Acountdet = () => {
  const { user } = useContext(Context) || {}; // Get user from Context
  const reduxUser = useSelector((state) => state.user.user); // Get user from Redux state
  const currentUser = user || reduxUser; // Prioritize Context over Redux

    return (
        <div class="tab-content mb-6">
            <div class="tab-pane active in" id="account-dashboard">
                <p class="greeting">
                    Hello
                    {/* <span class="text-dark font-weight-bold">{currentUser.name}</span> */}
                    <span class="text-dark font-weight-bold"> {currentUser?.name || 'Guest'}</span>

                    {/* (not
                    <span class="text-dark font-weight-bold">John Doe</span>?
                    <a href="#" class="text-primary">Log out</a>) */}
                </p>

                <p class="mb-4">
                    From your account dashboard you can view your <a href="#account-orders"
                        class="text-primary link-to-tab">recent orders</a>,
                    manage your <a href="#account-addresses" class="text-primary link-to-tab">shipping
                        and billing
                        addresses</a>, and
                    <a href="#account-details" class="text-primary link-to-tab">edit your password and
                        account details.</a>
                </p>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="orders" class="link-to-tab">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-orders">
                                    <i class="w-icon-orders"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Orders</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="order-detail" class="link-to-tab">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-download">
                                    <i class="w-icon-download"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Order Details</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-addresses" class="link-to-tab">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-address">
                                    <i class="w-icon-map-marker"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Addresses</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-details" class="link-to-tab">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-account">
                                    <i class="w-icon-user"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Account Details</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="wishlist" class="link-to-tab">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-wishlist">
                                    <i class="w-icon-heart"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Wishlist</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="login">
                            <div class="icon-box text-center">
                                <span class="icon-box-icon icon-logout">
                                    <i class="w-icon-logout"></i>
                                </span>
                                <div class="icon-box-content">
                                    <p class="text-uppercase mb-0">Logout</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="tab-pane" id="account-details">
                <div class="icon-box icon-box-side icon-box-light">
                    <span class="icon-box-icon icon-account mr-2">
                        <i class="w-icon-user"></i>
                    </span>
                    <div class="icon-box-content">
                        <h4 class="icon-box-title mb-0 ls-normal">Account Details</h4>
                    </div>
                </div>
                <form class="form account-details-form" action="#" method="post">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="firstname">First name *</label>
                                <input type="text" id="firstname" name="firstname" placeholder="John"
                                    class="form-control form-control-md" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="lastname">Last name *</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Doe"
                                    class="form-control form-control-md" />
                            </div>
                        </div>
                    </div>

                    <div class="form-group mb-3">
                        <label for="display-name">Display name *</label>
                        <input type="text" id="display-name" name="display_name" placeholder="John Doe"
                            class="form-control form-control-md mb-0" />
                        <p>This will be how your name will be displayed in the account section and in reviews</p>
                    </div>

                    <div class="form-group mb-6">
                        <label for="email_1">Email address *</label>
                        <input type="email" id="email_1" name="email_1"
                            class="form-control form-control-md" />
                    </div>

                    <h4 class="title title-password ls-25 font-weight-bold">Password change</h4>
                    <div class="form-group">
                        <label class="text-dark" for="cur-password">Current Password leave blank to leave unchanged</label>
                        <input type="password" class="form-control form-control-md"
                            id="cur-password" name="cur_password" />
                    </div>
                    <div class="form-group">
                        <label class="text-dark" for="new-password">New Password leave blank to leave unchanged</label>
                        <input type="password" class="form-control form-control-md"
                            id="new-password" name="new_password" />
                    </div>
                    <div class="form-group mb-10">
                        <label class="text-dark" for="conf-password">Confirm Password</label>
                        <input type="password" class="form-control form-control-md"
                            id="conf-password" name="conf_password" />
                    </div>
                    <button type="submit" class="btn btn-dark btn-rounded btn-sm mb-4">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default Acountdet



