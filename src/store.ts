import {ActionsType, shopReducer} from './shopReducer';
import {combineReducers, legacy_createStore} from "redux";
import {createStore, applyMiddleware, Store} from 'redux';
import thunk, {ThunkAction} from 'redux-thunk';

export const rootReducer = combineReducers({
    shop: shopReducer
    // Add other reducers as needed
});

export const store: Store<RootState> = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>;
