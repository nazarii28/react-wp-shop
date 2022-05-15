import React from 'react';
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

const ProductsSidebar = () => {

    const {data: products, loading} = useFetch('/products')

    return (
        loading ?
            <Loader/>
            :
            <>
                <div className="col-caption">
                    <span>POPULAR PRODUCTS</span>
                </div>
                <div className="list-popular-product">
                    <div>
                        {
                            products.slice(0, 4).map(product =>
                                <div className="pp-item">
                                    <div className="shop-img">
                                        <Link href={'product/'+product.id}>
                                            <img alt="" src={product.images[0]?.src}/>
                                        </Link>
                                    </div>
                                    <div className="shop-des">
                                        <h3><Link href={'product/'+product.id}>{product.name}</Link></h3>
                                        <div className="price">
                                            <span>€{product.price}</span>
                                            {product.sale_price && <span className="old">€{product.regular_price}</span>}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>


    );
};

export default ProductsSidebar;