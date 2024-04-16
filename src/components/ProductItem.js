import React from 'react';

function ProductItem({ imgSrc, title, category }) {
    return (
        <div className="item">
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <p>{category}</p>
            <button>Comprar</button>
        </div>
    );
}

export default ProductItem;
