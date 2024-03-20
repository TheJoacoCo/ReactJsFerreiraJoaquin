// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    const categories = ['Category 1', 'Category 2', 'Category 3'];
    const itemCount = 5;

    return (
        <div>
            <NavBar categories={categories} />
            <ItemListContainer greeting="Welcome to our store!" />
            <CartWidget itemCount={itemCount} />
        </div>
    );
};

export default App;
