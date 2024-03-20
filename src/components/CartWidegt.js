// src/components/CartWidget.js
import React from 'react';
import { Badge } from 'react-bootstrap';

const CartWidget = ({ itemCount }) => {
    return (
        <div>
            <i className="fas fa-shopping-cart"></i>
            <Badge variant="secondary">{itemCount}</Badge>
        </div>
    );
};

export default CartWidget;
