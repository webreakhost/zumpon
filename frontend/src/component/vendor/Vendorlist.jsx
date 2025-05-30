import React from 'react'

const Vendorlist = () => {
  return (
    <main class="main">
            {/* <!-- Start of Breadcrumb --> */}
            <nav class="breadcrumb-nav">
                <div class="container">
                    <ul class="breadcrumb mb-8">
                        <li><a href="demo1.html">Home</a></li>
                        <li><a href="#">Vendor</a></li>
                        <li><a href="#">WC Vendors</a></li>
                        <li>Store List</li>
                    </ul>
                </div>
            </nav>
            {/* <!-- End of Breadcrumb -->

            <!-- Start of Pgae Contetn --> */}
            <div class="page-content mb-4">
                <div class="container">
                    <div class="row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/1-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 1</h4>
                                </a>
                            </div>
                        </div>
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/2-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 2</h4>
                                </a>
                            </div>
                        </div>
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/3-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 3</h4>
                                </a>
                            </div>
                        </div>
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/4-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 4</h4>
                                </a>
                            </div>
                        </div>
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/5-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 5</h4>
                                </a>
                            </div>
                        </div>
                        <div class="vendor-brand-wrap mb-8">
                            <div class="vendor-brand">
                                <a href="vendor-wc-store-product-grid.html">
                                    <figure class="brand">
                                        <img src="assets/images/vendor/brand/6-150x150.jpg" alt="Brand" width="150"
                                            height="150" />
                                    </figure>
                                    <h4 class="vendor-name">Vendor 6</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End of Page Content --> */}
        </main>
  )
}

export default Vendorlist
