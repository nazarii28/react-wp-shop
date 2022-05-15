import React from 'react';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {removeCartItem} from "../store/features/cartSlice";


const MiniCart = () => {

    const {items, total} = useSelector(state => state.cart)

    const dispatch = useDispatch()

    const removeHandler = (id) => {
        dispatch(removeCartItem(id))
    }

    return (
        <>
            <div className="col-caption">
                <span> SHOPPING CART</span>
            </div>
            <div className="box-shopping-cart">
                {
                    Object.keys(items).length > 0 ?
                    <>
                        {
                            Object.keys(items).map((key) => {
                                const item = items[key].item
                                return (
                                    <div key={item.id} className="sc-item flex items-center justify-between">
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>x {items[key].count} x €{item.price}</p>
                                        </div>
                                        <div onClick={() => removeHandler(item.id)} className="cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <h5>Subtotal: <span>${total}</span></h5>
                    </>
                        :
                        <p>Cart is empty</p>
                }


                <Link href="/cart"><a className="my-btn btn-view-cart">View Cart</a></Link>
                <a href="#" className="my-btn">Checkout</a>

            </div>
        </>
    );
};

export default MiniCart;