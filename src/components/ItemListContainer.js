// src/components/ItemListContainer.js
import React from 'react';
import Item from './Item';

const ItemListContainer = ({ greeting }) => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: 'url_to_image',
            description: 'Description of Product 1',
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'url_to_image',
            description: 'Description of Product 2',
        },
        // Add more products as needed
    ];

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            <ul>
                {products.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;
