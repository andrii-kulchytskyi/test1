import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {CartItem, OrderInfo} from "./types";
import React, {useState} from "react";
import {changeItemCount, removeFromCart, submitOrder} from "./cartActions";


const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [orderInfo, setOrderInfo] = useState<OrderInfo>({
        email: '',
        phoneNumber: '',
        address: '',
    });

    const handleItemCountChange = (id: string, count: number) => {
        dispatch(changeItemCount(id, count));
    };

    const handleRemoveFromCart = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleSubmitOrder = () => {
        dispatch(submitOrder(orderInfo));
    };

    const handleOrderInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderInfo({
            ...orderInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            {cartItems.map((item: CartItem) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <input
                        type="number"
                        value={item.count}
                        onChange={(e) => handleItemCountChange(item.id, Number(e.target.value))}
                    />
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <form onSubmit={handleSubmitOrder}>
                <input
                    type="email"
                    name="email"
                    value={orderInfo.email}
                    onChange={handleOrderInfoChange}
                    required
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    value={orderInfo.phoneNumber}
                    onChange={handleOrderInfoChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={orderInfo.address}
                    onChange={handleOrderInfoChange}
                    required
                />
                <button type="submit">Submit order</button>
            </form>
        </div>
    );
};

export default Cart;
