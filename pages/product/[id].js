import React, {useEffect, useRef, useState} from 'react';
import Head from "next/head";
import Footer from "../../components/Footer";
import MiniCart from "../../components/MiniCart";
import axios from "axios";
import {useRouter} from "next/router";
import {addToCart, plusCartItem} from "../../store/features/cartSlice";
import {useDispatch} from "react-redux";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper';
import Header from "../../components/Header";
import axiosAuth from "../../axios/axiosAuth";
import useFetch from "../../hooks/useFetch";
import MainLayout from "../../components/MainLayout";
import RelatedProducts from "../../components/RelatedProducts";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import NoUiSlider from "../../components/NoUiSlider";
import ProductsSidebar from "../../components/ProductsSidebar";

const Product = () => {

    const router = useRouter()
    const { id } = router.query

    const dispatch = useDispatch()

    const [activeTab, setActiveTab] = useState(0)
    const [count, setCount] = useState(1)

    const {data: product, loading} = useFetch(`products/${id}`, !!id)

    const addToCartHandler = () => {
        dispatch(addToCart({
           count,
            product: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0].src
            }
        }))
    }

    const navigationPrev = useRef(null)
    const navigationNext = useRef(null)

    return (
        <MainLayout title="Single product">
            <Head>
                {!loading && <title>{product.name}</title>}
            </Head>
            <div className="cols">
                <div className="colleft">
                    {
                        loading ?
                            <Loader/>
                            :
                            <div className="shop-single">

                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="post-thumbnail post-thumbnail-large">
                                            <div className="swiper-product">
                                                {
                                                    product.images.length > 1 &&
                                                    <>
                                                        <div className="swiper-next" ref={navigationNext}>
                                                            NEXT
                                                        </div>
                                                        <div className="swiper-prev" ref={navigationPrev}>
                                                            PREV
                                                        </div>
                                                    </>
                                                }

                                                <Swiper
                                                    spaceBetween={50}
                                                    slidesPerView={1}
                                                    modules={[Navigation]}
                                                    navigation={{
                                                        prevEl: navigationPrev.current,
                                                        nextEl: navigationNext.current,
                                                    }}
                                                    onBeforeInit={(swiper) => {
                                                        swiper.params.navigation.prevEl = navigationPrev.current;
                                                        swiper.params.navigation.nextEl = navigationNext.current;
                                                    }}
                                                >
                                                    {
                                                        product.images.map(image =>
                                                            <SwiperSlide key={image.src}>
                                                                <a className="fancybox" data-fancybox-group="gallery1">
                                                                    <img alt={product.name} src={image.src}/>
                                                                </a>
                                                            </SwiperSlide>
                                                        )
                                                    }
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="product-des">
                                            <h1>{product.name}</h1>
                                            <div className="price">
                                                <div className="price">
                                                    <span>€{product.price}</span>
                                                    {product.sale_price && <span className="old">€{product.regular_price}</span>}

                                                </div>
                                            </div>

                                            <div className="votes">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-sapo" dangerouslySetInnerHTML={{ __html: product.short_description ? product.short_description : product.description.split('').slice(0, 160).join('') }}>

                                            </div>
                                            <div className="quantity">
                                                <input onClick={() => {
                                                    if(count > 1) {
                                                        setCount(count - 1)
                                                    }
                                                }}
                                                       type="button"
                                                       value="-"/>
                                                <input type="text" onChange={e => setActiveTab(e.target.value)} name="quantity" value={count}/>
                                                <input onClick={() => setCount(count + 1)} type="button" value="+"/>
                                            </div>

                                            <button onClick={addToCartHandler} className="my-btn">Add to cart</button>

                                        </div>
                                    </div>
                                </div>


                                <div className="shop-tab">
                                    <div className="shop-tab-caption">
                                        <ul role="tablist">
                                            {
                                                ['DESCRIPTION', 'ADDITIONAL INFORMATION'].map((item, idx) =>
                                                    <li className={activeTab === idx && 'active'}>
                                                        <a role="tab"
                                                           data-toggle="tab"
                                                           onClick={() => setActiveTab(idx)}>
                                                            {item}
                                                        </a>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className="tab-content">
                                        {activeTab === 0
                                            ?
                                            <div role="tabpanel" className="tab-pane active" dangerouslySetInnerHTML={{ __html: product.description }}>

                                            </div>
                                            :
                                            <div role="tabpanel" className="tab-pane active">
                                                <table className="table table-responsive">
                                                    <tbody>
                                                    <tr>
                                                        <td>Capacity</td>
                                                        <td>261</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hip Belt</td>
                                                        <td>Adjustable</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Reflective Piping</td>
                                                        <td>Yes</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Size</td>
                                                        <td>250 cm x 343cm</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Color</td>
                                                        <td>Gray</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Waterproof</td>
                                                        <td>Yes</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        }

                                    </div>

                                </div>
                                {
                                    !loading &&
                                    <RelatedProducts ids={product.related_ids}/>
                                }


                            </div>
                    }
                </div>
                <div className="colright">
                    <MiniCart/>
                    <ProductsSidebar/>
                </div>
                <div className="clearfix"/>
            </div>
        </MainLayout>
    );
};

export default Product;