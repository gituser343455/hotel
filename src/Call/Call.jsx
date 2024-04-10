import './Call.css';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'



const Call = () => {


    return(
        <div>
            <hr />
        <div className="down">
          <div className="block_dow">
            <img src="https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="" />
            <h1>+998 78 150-10-90</h1>
          </div>
        </div>
        <div className="img_main_br">
        <img src="https://navruzhotel.uz/_nuxt/img/bg.0fb8f92.jpg" alt="" />
        </div>

        <div className="text_main">
            <h1>Контакты</h1>
            <span>Узбекистан, Ташкент, Юнусабадский район, улица Шивли, 6-8.</span>
            <span>Тел.: (+998) 78 150 10 90</span>
            <span>info@navruzhotel.uz</span>

            <button>Отправить сообщение</button>
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

export default Call;