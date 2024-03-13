// src/components/Item.js
import React from 'react';

const Item = ({ product }) => {
    return (
        <li>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <button>Comprar</button>
        </li>
    );
};

export default Item;
