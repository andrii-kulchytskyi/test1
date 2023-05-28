import React, { useEffect } from 'react';
import {ShopsTypes} from "./types";
import {fetchShops} from "./shopActions";
import {RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";


const ShopList: React.FC = () => {
    const dispatch = useDispatch();
    const shops = useSelector((state: RootState) => state.shop.shops);

    useEffect(() => {
        dispatch(fetchShops());
    }, [dispatch]);

    return (
        <div>
            {shops.map((shop: ShopsTypes,index) => (
                <div key={shop.id}>
                    <h2>{shop.name}</h2>
                    <p>{shop.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ShopList;
