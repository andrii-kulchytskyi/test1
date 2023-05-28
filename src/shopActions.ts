import {Action, Dispatch} from 'redux';
import axios from 'axios';
import {ShopsTypes} from "./types";
import {ActionsType} from "./shopReducer";

export const fetchShops = () => async (dispatch: Dispatch<ActionsType>) => {
    const response = await axios.get<ShopsTypes[]>('https://your-api-url.com/shops');
    dispatch({type: 'FETCH_SHOPS', payload: response.data});
};
