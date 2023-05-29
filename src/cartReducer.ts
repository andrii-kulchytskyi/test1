
import {AddToCartAction, ChangeItemCountAction, RemoveFromCartAction, SubmitOrderAction} from "./types";

type ActionCartTypes = AddToCartAction | RemoveFromCartAction | ChangeItemCountAction | SubmitOrderAction;

const initialState: CartState = {
    items: [],
};

export const cartReducer = (state = initialState, action: ActionCartTypes): CartState => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, items: [...state.items, action.payload]};
        case 'REMOVE_FROM_CART':
            return {...state, items: state.items.filter(item => item.id !== action.id)};
        case 'CHANGE_ITEM_COUNT':
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ? {...item, count: action.count} : item),
            };
        case 'SUBMIT_ORDER':
            // Reset the cart after submitting the order.
            return initialState;
        default:
            return state;
    }
};
