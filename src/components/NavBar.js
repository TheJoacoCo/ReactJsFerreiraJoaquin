import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BurguerButton from './BurguerButton';

function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLinkClick = () => {
        setClicked(false); 
    };

    return (
        <>
            <NavContainer>
                <h2>Navbar <span>Responsive</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <Link onClick={handleLinkClick} to="/">Home</Link>
                    <Link onClick={handleLinkClick} to="/category/1">Category 1</Link>
                    <Link onClick={handleLinkClick} to="/category/2">Category 2</Link>
                    {/* Agrega más enlaces para otras categorías si es necesario */}
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    );
}

export default Navbar;

const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative; /* Agregado para posicionar el BgDiv correctamente */
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .links{
        position: absolute;
        top: 100%; /* Cambiado de -700px a 100% */
        left: 0;
        right: 0;
        text-align: center;
        transition: all .5s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
            display: block;
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 100%; /* Cambiado de 30% a 100% */
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`;

const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    z-index: -1;
    transition: all .6s ease ;
    &.active{
        height: 100%; /* Cambiado de width: 100%; a height: 100%; */
    }
`;