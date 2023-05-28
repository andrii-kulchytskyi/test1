import {ShopsTypes} from "./types";


type ShopState = {
    shops: ShopsTypes[];
}

const initialState: ShopState = {
    shops: []
}

type FetchShopsAction = {
    type: 'FETCH_SHOPS';
    payload: ShopsTypes[];
}

export type ActionsType = FetchShopsAction; // Add other action types as needed

export const shopReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FETCH_SHOPS':
            return {...state, shops: action.payload};
        default:
            return state;
    }
}
