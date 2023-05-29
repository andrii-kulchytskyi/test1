export type ShopsTypes = {
    id: string;
    name: string;
    description: string;
    // other shop properties...
}

export type CartItem = {
    id: string;
    name: string;
    price: number;
    count: number;
};

export type AddToCartAction = {
    type: 'ADD_TO_CART';
    payload: CartItem;
};

export type RemoveFromCartAction = {
    type: 'REMOVE_FROM_CART';
    id: string;
};

export type ChangeItemCountAction = {
    type: 'CHANGE_ITEM_COUNT';
    id: string;
    count: number;
};

export type OrderInfo = {
    email: string;
    phoneNumber: string;
    address: string;
};

export type SubmitOrderAction = {
    type: 'SUBMIT_ORDER';
    orderInfo: OrderInfo;
};
