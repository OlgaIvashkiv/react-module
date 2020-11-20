import React from 'react';
import './product-style.css'

const ProductItem = (props) => {
    const {
        product, cart, wishList, addItemToCart, removeItemFromCart, addItemToWishList,
        removeItemFromWishList
    } = props

    const handleItemClick = (item) => {
        if (cart.find(el => el.id === item.id)) {
            removeItemFromCart(item)
        } else {
            addItemToCart(item)
        }
    }
    const handleItemInWishList = (item) => {
        console.log(wishList)
        if (wishList.find(el => el.id === item.id)) {
            removeItemFromWishList(item)
        } else {
            addItemToWishList(item)
        }
    }

    return (
        <div className='card-container'>
            <div className="card">
                <div className="container">
                    <h4><b>{product.name}</b></h4>
                    <p>{product.price}</p>
                    <button className={cart.find(el => el.id === product.id) ? 'chosen': ''}
                        onClick={() => {

                        handleItemClick(product)
                    }}>Add to Cart
                    </button>
                    <button className={wishList.find(el => el.id === product.id) ? 'liked': ''}
                            onClick={() => {handleItemInWishList(product)}}
                    >Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ProductItem;