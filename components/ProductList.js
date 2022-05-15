import React from 'react';
import ProductCard from "./ProductCard";

const ProductList = ({isLoading, products}) => {

    return (
        <>
            {
                isLoading ?
                    <p>loading...</p>
                    :
                    products.length === 0 ?
                        <p style={{
                        textAlign: 'center'
                    }}>Nothing found</p> :
                    products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
            }
        </>
    );
};

export default ProductList;