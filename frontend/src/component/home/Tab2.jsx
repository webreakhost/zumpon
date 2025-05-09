



import React from 'react';

const products = [
  {
    id: 1,
    name: 'Classic Hat',
    images: [
      'assets/images/demos/demo1/products/3-1-1.jpg',
      'assets/images/demos/demo1/products/3-1-2.jpg',
    ],
    price: '$53.00',
    rating: '60%',
    reviews: 1,
  },
  {
    id: 2,
    name: "Women’s White Handbag",
    images: ['assets/images/demos/demo1/products/3-2.jpg'],
    price: '$26.62',
    rating: '80%',
    reviews: 3,
  },
  {
    id: 3,
    name: 'Multi Functional Apple iPhone',
    images: ['assets/images/demos/demo1/products/3-3.jpg'],
    price: '$136.26',
    oldPrice: '$145.90',
    rating: '100%',
    reviews: 5,
    discount: '7% Off',
  },
  {
    id: 4,
    name: 'Fashion Blue Towel',
    images: [
      'assets/images/demos/demo1/products/3-4-1.jpg',
      'assets/images/demos/demo1/products/3-4-2.jpg',
    ],
    price: '$26.55 - $29.99',
    rating: '100%',
    reviews: 8,
  },
  {
    id: 5,
    name: 'Data Transformer Tool',
    images: ['assets/images/demos/demo1/products/3-9.jpg'],
    price: '$64.47',
    rating: '60%',
    reviews: 3,
  },
  {
    id: 6,
    name: 'Women’s Hairdye',
    images: ['assets/images/demos/demo1/products/3-10.jpg'],
    price: '$173.84',
    rating: '60%',
    reviews: 3,
  },
  {
    id: 7,
    name: "Women’s White Handbag",
    images: ['assets/images/demos/demo1/products/3-9.jpg'],
    price: '$26.62',
    rating: '80%',
    reviews: 3,
  },
  {
    id: 8,
    name: "Women’s White Handbag",
    images: ['assets/images/demos/demo1/products/3-2.jpg'],
    price: '$26.62',
    rating: '80%',
    reviews: 3,
  },
];

const Tab2 = () => {
  return (
    <div className="tab-pane active pt-4" id="tab1-2">
      <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
        {products.map((product) => (
          <div className="product-wrap" key={product.id}>
            <div className="product text-center">
              <figure className="product-media">
                <a href="product-default.html">
                  {product.images.map((img, index) => (
                    <img key={index} src={img} alt="Product" width="300" height="338" />
                  ))}
                </a>
                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart"></a>
                  <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist"></a>
                  <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quickview"></a>
                  <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare"></a>
                </div>
                {product.discount && (
                  <div className="product-label-group">
                    <label className="product-label label-discount">{product.discount}</label>
                  </div>
                )}
              </figure>
              <div className="product-details">
                <h4 className="product-name">
                  <a href="product-default.html">{product.name}</a>
                </h4>
                <div className="ratings-container">
                  <div className="ratings-full">
                    <span className="ratings" style={{ width: product.rating }}></span>
                    <span className="tooltiptext tooltip-top"></span>
                  </div>
                  <a href="product-default.html" className="rating-reviews">
                    ({product.reviews} reviews)
                  </a>
                </div>
                <div className="product-price">
                  <ins className="new-price">{product.price}</ins>
                  {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab2;

