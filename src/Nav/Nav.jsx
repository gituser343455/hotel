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
                <li><Link to="/About">О нас</Link> </li>
                <li><Link to="/Number">Номера</Link></li>
                <li><Link to="/Comfort">Удобства</Link></li>
                <li><Link to="/New">Новости</Link></li>
                <li><Link to="/Call">Контакты</Link></li>
                <li><Link to="/Menu">Меню</Link></li>
            </ul>
            </div>
        </nav>
        
        </div>
    )
}

export default Navbar;