import React from 'react';
const ProductItem = (props) => {
    const {product, cart, wishList, addItemToCart, removeItemFromCart,addItemToWishList,
        removeItemFromWishList} = props

    const handleItemClick = (item) => {
        if (cart.find(el => el.id === item.id)){
            removeItemFromCart(item)
        } else {
            addItemToCart(item)
        }
    }
    return (
        <div>
            {product.id}
        </div>
    );

}

export default ProductItem;