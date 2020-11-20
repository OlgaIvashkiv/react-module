import {ADD_TO_CART, ADD_TO_WISH_LIST, REMOVE_FROM_CART, REMOVE_FROM_WISH_LIST} from "./actions";

const initialState = {
    products: [
        {name: 'Product1', price: 1.99, id: 1},
        {name: 'Product2', price: 2.99, id: 2},
        {name: 'Product3', price: 3.99, id: 3},
        {name: 'Product4', price: 4.99, id: 4},
        {name: 'Product5', price: 5.99, id: 5},
    ],
    cart: [],
    wishList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const itemInCart = state.find(el => el.id === action.payload.id)
            const updatedCart = [...state.cart];
            if (!itemInCart) updatedCart.push(action.payload)

            return {...state, cart: updatedCart}
        }
        case REMOVE_FROM_CART: {
            return {...state, cart: state.cart.filter(el => el.id !== action.payload.id)}
        }
        case ADD_TO_WISH_LIST: {
            const likedItem = state.wishList.find(el => el.id === action.payload.id);
            const updatedWishList = [...state.wishList];
            if (!likedItem) updatedWishList.push(action.payload);

            return {...state, wishList: updatedWishList}
        }
        case REMOVE_FROM_WISH_LIST: {
            return {...state, wishList: state.wishList.filter(el => el.id !== action.payload.id)}
        }
        default :
            return state

    }
}

export default reducer;