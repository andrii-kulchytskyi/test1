import axios from 'axios';
import { Dispatch } from 'redux';
import {RootState} from "./store";
import {AddToCartAction, CartItem, ChangeItemCountAction, OrderInfo, RemoveFromCartAction} from "./types";

export const addToCart = (item: CartItem): AddToCartAction => ({
    type: 'ADD_TO_CART',
    payload: item,
});

export const removeFromCart = (id: string): RemoveFromCartAction => ({
    type: 'REMOVE_FROM_CART',
    id,
});

export const changeItemCount = (id: string, count: number): ChangeItemCountAction => ({
    type: 'CHANGE_ITEM_COUNT',
    id,
    count,
});

export const submitOrder = (orderInfo: OrderInfo) => async (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    const order = { ...state.cart, orderInfo };

    // Make a POST request to your API to save the order.
    await axios.post('https://your-api-url.com/orders', order);

    dispatch({
        type: 'SUBMIT_ORDER',
        orderInfo,
    });
};