import React, {useEffect, useMemo} from 'react';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/features/cartSlice";
import {addFavorite, removeFavorite} from "../store/features/productsSlice";

const ProductCard = ({product}) => {

    const dispatch = useDispatch()

    const {items: cartItems} = useSelector(state => state.cart)
    const {favorites} = useSelector(state => state.products)

    const addToCartHandler = (item) => {
        dispatch(addToCart({
            count: 1,
            product: {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.images[0].src
            }
        }))
    }

    const isAddedToCart = useMemo(() => {
        return Object.keys(cartItems).indexOf(product.id.toString()) !== -1
    }, [cartItems])

    const isFavorited = useMemo(() => {
        return favorites.indexOf(product.id) !== -1
    }, [favorites])

    const likeHandler = () => {
        if(isFavorited) {
            dispatch(removeFavorite(product.id))
        } else {
            dispatch(addFavorite(product.id))
        }
    }

    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="shop-item">
                <div className="shop-img">
                    <span
                        onClick={likeHandler}
                        className={`like ${isFavorited ? 'active' : ''}`}>
                        <i className="fa fa-heart-o"></i>
                    </span>
                    <Link href={'http://localhost:3000/product/'+product.id}>
                        <a>
                            <img alt={product.name} src={product.images[0]?.src} />
                        </a>
                    </Link>
                    {
                        isAddedToCart ?
                            <Link href="http://localhost:3000/cart"><a className="add-to-cart">Go to cart</a></Link>
                            :
                            <button onClick={() => addToCartHandler(product)} className="add-to-cart">ADD TO CART</button>
                    }
                </div>
                <div className="shop-des">
                    <h3><Link href={'http://localhost:3000/product/'+product.id}>{product.name}</Link></h3>

                    <div className="price">
                        <span>€{product.price}</span>
                        {product.sale_price && <span className="old">€{product.regular_price}</span>}
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
        </div>
    );
};

export default ProductCard;