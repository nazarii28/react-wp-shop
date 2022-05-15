import React, {useEffect} from 'react';
import Link from "next/link";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const RelatedProducts = ({ids}) => {

    const {data: products, loading} = useFetch(`/products?include=${ids.join(',')}`)

    return (
        <div className="related-post">
            <div className="box-detail-caption">
                <span>RELATED PRODUCTS</span>
            </div>


            <div className="row">
                {
                    loading ? <Loader/> :
                    products.slice(0, 3).map(product =>
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    )
                }
            </div>

        </div>
    );
};

export default RelatedProducts;