import React, {useEffect} from 'react';
import Head from "next/head";
import ProductList from "../../components/ProductList";
import {useRouter} from "next/router";
import useFetch from "../../hooks/useFetch";
import ProductsLayout from "../../components/ProductsLayout";



const Category = () => {
    const router = useRouter()
    const { id } = router.query

    const {data: category, loading: loadingCategory} = useFetch(`/products/categories/${id}`, id)



    return (
        <ProductsLayout title={category ? category.name : 'Category'} category={id} loadingCategory={!id}>
            {
                (data, isLoading) => (
                    <>
                        <Head>
                            <title>Category {category?.name}</title>
                        </Head>
                        <ProductList isLoading={isLoading} products={data}/>
                    </>
                )
            }
        </ProductsLayout>
    );
};

export default Category;