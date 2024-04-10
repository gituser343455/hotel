import './About.css';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const About = () => {

    return(
        <div className='about'>
            <hr />
        <div className="down">
          <div className="block_dow">
            <img src="https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="" />
            <h1>+998 78 150-10-90</h1>
          </div>
        </div>
        <div className="img_main_br">
        <img src="https://navruzhotel.uz/_nuxt/img/bg.9fce939.jpg" alt="" />
        </div>
        <div className="about">
            <h1>О нас</h1>
            <ul>
                <li>Уютная и комфортабельная гостиница Navruz Hotel Tashkent расположена в центре города и впервые открыла свои двери для гостей отеля в 2018 году.</li>
                <li>Отель предлагает для удобного проживания 128 номеров различной категории, оборудованных современной техникой.
                     В каждой комнате установлен смарт ТВ, мини холодильник, кондиционер, Wi-Fi и надежный сейф.</li>
                <li>Для Гостей отеля доступны вместительный 
                    зал для конференций, бар, ресторан, тренажёрный
                     зал, бильярдная, открытый бассейн, сауна и уютный дворик</li>

            </ul>
        </div>

        <div className="why">
        <h1>О нас</h1>
        <div className="ul">
            <ul>
                <li>Доступные цены</li>
                <li>Управление бронированием онлайн</li>
                <li>Персонал говорит на русском, узбекском, английском языках</li>
                <li>Безопасность</li>
                <li>Номера для некурящих</li>
            </ul>
            <ul>
                <li>Бесплатный Wi-Fi</li>
                <li>Трансфер от/до аэропорта</li>
                <li>Семейные номера</li>
                <li>Бесплатная парковка</li>
                <li>Круглосуточная стойка регистрации</li>
            </ul>
        </div>
        </div>

        <div className="bron">
            <div className="block_br">
                <div className="text_br">
                    <h2>Бронирование номеров</h2>
                    <span>Гарантированное заселение</span>
                </div>
                <div className="text_br2">
                    <div className="inp_br">
                        <div className="text_inp">
                        <span>Заезд</span>
                        <h4>10.04.2024</h4>
                        </div>
                        <div className="icon_br">
                  <FaCalendarAlt />

                        </div>
                    </div>
                </div>
                <div className="text_br3">
                <div className="inp_br">
                        <div className="text_inp">
                        <span>Заезд</span>
                        <h4>11.04.2024</h4>
                        </div>
                        <div className="icon_br">
                  <FaCalendarAlt />

                        </div>
                    </div>
                </div>
                <div className="text_br4">
                <div className="inp_br">
                        <div className="text_inp">
                        <span>Заезд</span>
                        <h4>2 взрослых, 0 детей</h4>
                        </div>
                        <div className="icon_br">
                  <FaCalendarAlt />

                        </div>
                    </div>
                </div>
                <div className="butt_br">
                <div className="butt_inp">
                <button><Link to="/Bron">Бронирование</Link></button>
                </div>
                </div>


            </div>
        </div>

        <div className="cart">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.819353247629!2d69.28727522870963!3d41.33454138105029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf49b954dd3%3A0x8b6b32b227cbe29e!2sNavruz%20Hotel%20Tashkent!5e0!3m2!1sru!2s!4v1712723592585!5m2!1sru!2s"
         width="70%" height="450" 
          allowfullscreen=""
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
        </div>
    );
}

export default About;