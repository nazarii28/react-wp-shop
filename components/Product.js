import React from 'react';

const Product = () => {
    return (
        <div className="shop-item">
            <div className="shop-img">
                    <span className="like">
                        <i className="fa fa-heart-o"></i>
                    </span>
                <a href="shop-single.html"> <img alt="" src="images\shop1.jpg"/></a>

                <a href="shop-single.html" className="add-to-cart">ADD TO CART</a>
            </div>
            <div className="shop-des">
                <h3><a href="shop-single.html">LE PARC MINOTTI CHAIR</a></h3>

                <div className="price">
                    <span>€169.00</span>
                </div>
                <div className="votes">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                </div>
            </div>
        </div>
    );
};

export default Product;