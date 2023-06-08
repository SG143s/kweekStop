import './Cart.css';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const OrderDetail = ({itemsorder}) => {
    const { loggedIn, userData } = useContext(AuthContext);

    return (
        <div>
            
        </div>
    );
};

export default OrderDetail;