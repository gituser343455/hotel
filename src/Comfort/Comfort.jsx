import './Comfort.css';
import { FaCalendarAlt } from "react-icons/fa";

import { Link } from 'react-router-dom'


const Comfort = () => {

return(
    <div className='num'>
        <hr />
        <div className="down">
          <div className="block_dow">
            <img src="https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="" />
            <h1>+998 78 150-10-90</h1>
          </div>
        </div>
        <div className="img_main_br">
        <img src="	https://navruzhotel.uz/_nuxt/img/bg.93f7187.jpg" alt="" />
        </div>
        <div className="text_main">
            <h1>Номера</h1>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>Все номера данной категории оснащены удобной кроватью размера king-size, 
                смарт ТВ, телефоном, мини холодильником, сейфом, шкафом для хранения одежды,
                 отдельной рабочей зоной и ванной комнатой с душевой кабиной. Общая площадь номера 20 м2. 
                В стоимость номера входит завтрак, мини бар с безалкогольными напитками,
                 посещение тренажерного зала и летнего бассейна.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="	https://navruzhotel.uz/_nuxt/img/pool2.dec0501.jpg" alt="" />
                    <img src="	https://navruzhotel.uz/_nuxt/img/pool2.dec0501.jpg" alt=""/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/pool2.dec0501.jpg" alt="" />
                    <img src="	https://navruzhotel.uz/_nuxt/img/pool2.dec0501.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>В летний период к услугам гостей прекрасная зона для отдыха и релакса с
                 открытым бассейном, удобными лежаками и уютными беседками с комфортной ротанговой мебелью. Время работы бассейна 09:00 – 21:00</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg" alt=""/>
                    <img src="https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>Уютный ресторан Magnolia каждое утро встречает гостей «шведским столом» с богатым выбором блюд, закусок, фруктов и восхитительных десертов. Также, в тёплое время года, насладиться трапезой можно в уютном дворике с беседкой на свежем воздухе. Завтрак «шведский стол» сервируется с 06:30 до 10:30. Ранний завтрак «с собой» предоставляется по запросу. Также наш уютный ресторан открыт для проведения бизнес завтраков, деловых обедов и ужинов, семейных праздников и других мероприятий.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="	https://navruzhotel.uz/_nuxt/img/bar1.d186c94.jpg" alt="" className='osb' />
                    <img src="	https://navruzhotel.uz/_nuxt/img/bar1.d186c94.jpg" alt=""  className='osb'/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/bar1.d186c94.jpg" alt=""  className='osb'/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/bar1.d186c94.jpg" alt="" className='osb'/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>Атмосферный бар Satellite работает в режиме 24/7. Гости могут насладиться вкусным кофе, разнообразными коктейлями, а также заказать закуски и горячие блюда.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="https://navruzhotel.uz/_nuxt/img/gym1.77c1917.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/gym1.77c1917.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/gym1.77c1917.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/gym1.77c1917.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>Для поддержания спортивной формы в отеле функционирует фитнес зал. Работает круглосуточно.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg" alt=""/>
                    <img src="https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>К услугам гостей уютная бильярдная комната с большим смарт телевизором, где можно приятно провести свободное время. Работает круглосуточно.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="https://navruzhotel.uz/_nuxt/img/terace2.5395cd4.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/terace2.5395cd4.jpg" alt=""  />
                    <img src="https://navruzhotel.uz/_nuxt/img/terace2.5395cd4.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/terace2.5395cd4.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>Гости могут полюбоваться шикарным панорамным видом на город с открытой террасы на 6-м этаже отеля. На террасе обустроены комфортные кресла со столиками, доступны заказ еды и напитков из бара.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="	https://navruzhotel.uz/_nuxt/img/sauna1.3e54df6.jpg" alt="" className='osb'/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/sauna1.3e54df6.jpg" alt=""  className='osb'/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/sauna1.3e54df6.jpg" alt="" className='osb' />
                    <img src="	https://navruzhotel.uz/_nuxt/img/sauna1.3e54df6.jpg" alt="" className='osb'/>
                </div>
            </div>
        </div>
        <div className="pool">
            <h1>Standart King </h1>
            <span>В отеле имеются 2 парные, где можно отдохнуть и расслабиться в течении дня (за дополнительную плату).</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="	https://navruzhotel.uz/_nuxt/img/massage1.133f30f.jpg" alt="" />
                    <img src="	https://navruzhotel.uz/_nuxt/img/massage1.133f30f.jpg" alt=""/>
                    <img src="	https://navruzhotel.uz/_nuxt/img/massage1.133f30f.jpg" alt="" />
                    <img src="	https://navruzhotel.uz/_nuxt/img/massage1.133f30f.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="pool2">
            <h1>Standart King </h1>
            <span>Отель располагает двумя комфортабельными конференц залами.
                 Залы оборудованы всем необходимым для проведения переговоров, тренингов, семинаров, конференций и презентаций.
                Конференц-зал. Площадь 63 м2. Максимальная вместимость 50 человек.
                Возможны различные виды рассадки в зависимости от количества людей и пожеланий заказчика: 
                классрум, О-форма, П-форма, театральная рассадка, кабаре, B&B встречи.
                Оборудование: LCD проектор, белый экран, радио микрофоны, колонки, whiteboard,
                высокоскоростной интернет WI-FI (выделенная линия). Участникам предоставляются
                бювар, блокноты, карандаши и бутилированная питьевая вода.

                Meeting-room. Площадь 41 м2. Максимальная вместимость зала 16 человек.
                Оборудование: LCD проектор, белый экран, флипчарт, высокоскоростной интернет WI-FI 
                (выделенная линия). Участникам предоставляются бювар, блокноты, карандаши и
                бутилированная питьевая вода. Кофе брейки и обеды сервируются по запросу с 
                широким выбором сэтов и по индивидуальному заказу.</span>
            <div className="crusel">
                <div className="img_car">
                    <img src="https://navruzhotel.uz/_nuxt/img/king2.c7bcc07.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/king3.a17503f.jpg" alt=""  className='osb'/>
                    <img src="https://navruzhotel.uz/_nuxt/img/king4.f3bf48a.jpg" alt="" />
                    <img src="https://navruzhotel.uz/_nuxt/img/king6.f9414e9.jpg" alt="" className='osb'/>
                </div>
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

export default Comfort;