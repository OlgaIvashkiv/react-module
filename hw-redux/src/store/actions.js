export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST';
export const REMOVE_FROM_WISH_LIST = 'REMOVE_FROM_WISH_LIST';

export const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart,
        wishList: state.wishList
    }
}

export const addItemToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}
export const removeItemFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}
export const addItemToWishList = (item) => {
    return {
        type: ADD_TO_WISH_LIST,
        payload: item
    }
}
export const removeItemFromWishList = (item) => {
    return {
        type: REMOVE_FROM_WISH_LIST,
        payload: item
    }
}