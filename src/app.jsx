import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import StorePage from './components/StorePage';
import { NavBar } from './components/NavBar';
import { NotFound } from './components/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Route path="/item/1" component={StorePage} />
                <Route path="/item/2" component={StorePage} />
                <Route path="/item/3" component={StorePage} />
                <Route path="/item/4" component={StorePage} />
                <Route path="/item/5" component={StorePage} />
                <Route path="/item/6" component={StorePage} />
                <Route path="/item/7" component={StorePage} />
                <Route path="/item/8" component={StorePage} />
                <Route path="/item/9" component={StorePage} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
