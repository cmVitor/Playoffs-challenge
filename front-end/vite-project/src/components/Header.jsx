import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/login"); 
    };

    return (
        <div className='header'>
            <Link to='/' className='header__title--link'><h1 className="header__title">Play-off Challenge</h1></Link>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><Link to='/' className="header__link">Home</Link></li>
                    <li className="header__item"><Link to='/campeonatos' className="header__link">Campeonatos</Link></li>
                    <li className="header__item"><Link to='/servicos' className="header__link">Serviços</Link></li>
                    <li className="header__item"><Link to='/contato' className="header__link">Contato</Link></li>
                    <li className=""> <button className='header__button' onClick={handleNavigate}>Login</button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;