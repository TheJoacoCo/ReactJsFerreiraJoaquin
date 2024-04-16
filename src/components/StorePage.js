import React from 'react';
import { Link } from 'react-router-dom';

function StorePage() {
    return (
        <main>
            <div className="container">
                <h1>Tienda</h1>
                <div className="grid-container">
                    <div className="item">
                        <img src="/img/remera-astonmartin.jpg" alt="Artículo 1" />
                        <h2>Remera Aston Martin</h2>
                        <p>Remeras</p>
                        <Link to="/item/1">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/remera-ferrari.jpg" alt="Artículo 2" />
                        <h2>Remera Ferrari</h2>
                        <p>Remeras</p>
                        <Link to="/item/2">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/remera-mclaren.jpg" alt="Artículo 3" />
                        <h2>Remera Mclaren</h2>
                        <p>Remeras</p>
                        <Link to="/item/3">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/remera-mercedes.jpg" alt="Artículo 4" />
                        <h2>Remera Mercedes</h2>
                        <p>Remeras</p>
                        <Link to="/item/4">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/remera-redbull.jpg" alt="Artículo 5" />
                        <h2>Remera RedBull</h2>
                        <p>Remeras</p>
                        <Link to="/item/5">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/remera-norris.jpg" alt="Artículo 6" />
                        <h2>Remera Norris</h2>
                        <p>Remeras</p>
                        <Link to="/item/6">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/buzo-f1.jpg" alt="Artículo 7" />
                        <h2>Buzo F1</h2>
                        <p>Buzos</p>
                        <Link to="/item/7">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/buzos-ferrari.jpg" alt="Artículo 8" />
                        <h2>Buzos Ferrari</h2>
                        <p>Buzos</p>
                        <Link to="/item/8">
                            <button>Comprar</button>
                        </Link>
                    </div>
                    <div className="item">
                        <img src="/img/buzos-redbull.jpg" alt="Artículo 9" />
                        <h2>Buzos RedBull</h2>
                        <p>Buzos</p>
                        <Link to="/item/9">
                            <button>Comprar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default StorePage;
