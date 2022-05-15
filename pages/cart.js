import React from 'react';
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import Header from "../components/Header";
import {addToCart, minusCartItem, plusCartItem, removeCartItem} from "../store/features/cartSlice";
import MainLayout from "../components/MainLayout";


const Cart = () => {

    const dispatch = useDispatch()

    const {items, total} = useSelector(state => state.cart)

    return (
        <MainLayout title="cart">
            <div className="cart-page">
                <div className="cart-tab-wrap">
                    <table className="cart-table table table-bordered">
                        <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items &&
                            Object.keys(items).map(key => {
                                    const product = items[key].item
                                    return (
                                        <tr key={product.id}>
                                            <td><img src={product.image} alt={product.name} height="100" width="100"/></td>
                                            <td><Link href={'/products'+product.id}>{product.name}</Link></td>
                                            <td><span className="amount">${product.price}</span></td>
                                            <td>
                                                <div className="quantity">
                                                    <input type="button" value="-" onClick={() => {
                                                        dispatch(minusCartItem({
                                                            count: 1,
                                                            id: product.id
                                                        }))
                                                    }}/>
                                                    <input type="text" name="quantity" value={items[key].count}/>
                                                    <input type="button" value="+" onClick={() => {
                                                        dispatch(plusCartItem({
                                                            count: 1,
                                                            id: product.id
                                                        }))
                                                    }}/>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="total">${product.price * items[key].count}</div>
                                            </td>
                                            <td><a
                                                onClick={() => {
                                                    dispatch(removeCartItem(product.id))
                                                }}
                                                className="remove cursor-pointer"><i className="fa fa-times"></i></a></td>
                                        </tr>
                                    )
                                }
                            )
                        }
                        </tbody>
                    </table>
                </div>
                <a href="#" className="my-btn active">Proceed to checkout</a>
                <div className="cart-totals">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <table className="table table-bordered ">
                                <tbody>
                                <tr>
                                    <th>Cart Subtotal</th>
                                    <td><span className="amount">${total}</span></td>
                                </tr>
                                <tr>
                                    <th>Shipping and Handling</th>
                                    <td>
                                        Free Shipping
                                    </td>
                                </tr>
                                <tr>
                                    <th>Order Total</th>
                                    <td><strong><span className="amount">${total}</span></strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Cart;