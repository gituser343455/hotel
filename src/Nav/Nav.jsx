import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';

const Navbar = () => {
    return (
        <div className='nav'>
        <nav>
            <div className="up">
            <ul>
                <li><Link to="/App">Главная</Link></li>
                <li><Link to="/Bron">Бронирование</Link></li>
                <li>О нас</li>
                <li>Номера</li>
                <li>Удобства</li>
                <li>Новости</li>
                <li>Контакты</li>
                <li>Меню</li>
            </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar