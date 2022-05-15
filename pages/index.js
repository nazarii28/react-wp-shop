import Head from 'next/head'
import React from "react";
import ProductList from "../components/ProductList";
import ProductsLayout from "../components/ProductsLayout";


export default function Home() {
    return (
    <ProductsLayout title="Home page">
        {
            (data, isLoading) => (
               <>
                   <Head>
                       <title>Home Page</title>
                   </Head>
                   <ProductList isLoading={isLoading} products={data}/>
               </>
            )
        }
    </ProductsLayout>
  )
}
