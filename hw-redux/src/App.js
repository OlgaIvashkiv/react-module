import React from 'react'
import './App.css';
import {connect} from "react-redux";
import {addItemToCart, addItemToWishList,
    mapStateToProps,removeItemFromCart, removeItemFromWishList} from "./store/actions";
import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";


function App(props) {
    const {products, cart, wishList, addItemToCart, removeItemFromCart,addItemToWishList,
        removeItemFromWishList} = props
    return (
        <div>
            <Header cart={cart} wishList={wishList}/>
            <ProductList products={products}
                         cart={cart}
                         wishList={wishList}
                         addItemToCart={addItemToCart}
                         removeItemFromCart={removeItemFromCart}
                         addItemToWishList={addItemToWishList}
                         removeItemFromWishList={removeItemFromWishList}
            />
        </div>
    );
}


export default connect(mapStateToProps, {
    addItemToCart,
    removeItemFromCart,
    addItemToWishList,
    removeItemFromWishList
})(App);
