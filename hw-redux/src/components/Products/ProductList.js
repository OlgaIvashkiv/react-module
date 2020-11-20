import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    const {products, cart, wishList, addItemToCart, removeItemFromCart,addItemToWishList,
        removeItemFromWishList} = props

    return (
        <div>
            {
               products.map( product => (
                   <ProductItem product={product} key={product.id}
                                cart={cart}
                                wishList={wishList}
                                addItemToCart={addItemToCart}
                                removeItemFromCart={removeItemFromCart}
                                addItemToWishList={addItemToWishList}
                                removeItemFromWishList={removeItemFromWishList}
                   />
               ))
            }
        </div>
    );

}

export default ProductList;