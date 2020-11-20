import React from 'react';
import './header.css'

const Header = (props) => {
    const {cart, wishList} = props
    return (
        <div className="content">
            <div className="cart">
                Items in cart: {cart.length}
            </div>
            <div className="wishlist">
                Items in Wishlist: {wishList.length}
            </div>
        </div>
    );

}

export default Header;