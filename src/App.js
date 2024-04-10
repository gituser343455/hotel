import './App.css';

import {addDoc, collection } from '@firebase/firestore'
import { firestore } from './firebase';

import React, { useRef } from 'react';

import { FaCalendarAlt } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";



function App() {

  const massege = useRef();
  const ref = collection(firestore,"massages")

  const handS = async(e) => {
    e.preventDefault();
    console.log(massege.current.value);

    let data = {
      massege:massege.current.value,
    }
    try{
      addDoc(ref,data);
      alert("Ваши данные отправлины в Firebase")
      
    }
    catch(e){
      console.log(e);
    }
    
  }


  return (
    <div className="app">
      <div className="nav">
        <div className="up">
        
        </div>
        <hr />
        <div className="down">
          <div className="block_dow">
            <img src="https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="" />
            <h1>+998 78 150-10-90</h1>
          </div>
        </div>
      </div>
      <div className="img_main">
        <div className="main_blocks">
          <div className="first">
            <h1>Уютный отель для бизнеса и отдыха в деловом центре Ташкента</h1>
            <button>Забронировать</button>
          </div>
          <div className="second">
            <div className="block_sec">
              <div className="text_sec">
                <h2>Бронирование номеров</h2>
                {/* <span>Получите гарантированное заселение</span>
                <span>ПРЯМО СЕЙЧАС!</span> */}
              </div>
              <div className="inp_sec">
                <div className="block_inp1 bor">
                  <div className="text_bor">
                    <span>Заезд</span>

                    <input 
                      type="text" 
                      placeholder='Заезд ?' 
                      ref={massege}/>

                  </div>
                  <div className="icn_bor">
                  <FaCalendarAlt />
                  </div>
                </div>
                <div className="block_inp2 bor">
                <div className="text_bor">
                    <span>Заезд</span>
                    {/* <h4>07.04.2024</h4> */}
                    <input type="text" placeholder='Выезд ?' ref={massege}/>

                  </div>
                  <div className="icn_bor">
                  <FaCalendarAlt />
                  </div>
                </div>
                <div className="block_inp3 bor">
                <div className="text_bor">
                    <span>Гости</span>

                    <input type="text" placeholder='Сколько детей ?' ref={massege} />


                  </div>
                  <div className="icn_bor">
                  <MdPerson />
                  </div>
                </div>
                
                <div className="butt_inp">
                <button onClick={handS}>Найти номер</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_about">
        <div className="main_text_ab">
          <h1>О нас</h1>
          <div className="line"></div>
        </div>
        <div className="two_blocks">
          <div className="text_block">
            <h1>Navruz Hotel Tashkent</h1>

            <div className="span_text">
            <span>Navruz Hotel Tashkent – уютный комфортабельный отель с 
              высоким классом обслуживания 24/7 и прекрасным расположением
               в деловом центре города с развитой инфраструктурой.</span>
            <span>Отель предлагает 128 комфортабельных и хорошо оборудованных номера различной категории.
                 Все номера отеля оснащены кондиционером, холодильником,
                 сейфом, смарт телевизором со спутниковыми каналами, Wi-Fi и туалетно-косметическими принадлежностями.</span>
              <span>Для гостей отеля доступны вместительные залы для конференций, ресторан, бар, тренажёрный зал, бильярд, сауна, открытый бассейн, уютный дворик 
                  с беседками и бесплатный прокат велосипедов. Предоставляется трансфер от/до аэропорта и услуга доставки еды и напитков в номер.</span>
                <span>Стойка регистрации открыта круглосуточно.</span>
            </div>
          </div>
          <div className="img_block_tw">
            <img src="https://navruzhotel.uz/_nuxt/img/about-bg.57c329c.png" alt="" />
          </div>
        </div>
        <div className="more">
            <h1>Узнать больше </h1>
            <div className="icon_more"><SlArrowRight /></div>
          </div>

          <div className="blocks_info">
            <div className="block_in">
                <div className="fir_bl">
                  <img src="https://navruzhotel.uz/_nuxt/img/medal.bde7ded.svg" alt="" />
                  <h3>Доступные цены на номера</h3>
                </div>
                <div className="fir_bl">
                  <img src="https://navruzhotel.uz/_nuxt/img/snow.7c72b49.svg" alt="" />
                  <h3>Зеленая зона, где можно отдохнуть</h3>
                </div>
                <div className="fir_bl">
                <img src="	https://navruzhotel.uz/_nuxt/img/wifi.cbdbbea.svg" alt="" />
                <h3>Бесплатный Wi-Fi на территории отеля</h3>

                </div>
                <div className="fir_bl">
                <img src="https://navruzhotel.uz/_nuxt/img/bonfire.5cef29a.svg" alt="" />
                <h3>Квалифицированный персонал 24/7</h3>

                </div>
            </div>
          </div>
      </div>
      <div className="number">
        <div className="text_num">
        <h1>Номера</h1>
          <div className="line_num"></div>
        </div>
        <div className="blocks_num">
          <div className="fir_bl">
            <div className="img_bl">
              <img src="https://navruzhotel.uz/_nuxt/img/twin-room.e166ff0.png" alt="" />
            </div>
            <div className="text_bl">
            <h4>Standard Twin</h4>
            <div className="line_bl"></div>
            </div>
          </div>
          <div className="fir_bl">
            <div className="img_bl">
              <img src="	https://navruzhotel.uz/_nuxt/img/king-room.b252916.png" alt="" />
            </div>
            <div className="text_bl">
            <h4>Standard Twin</h4>
            <div className="line_bl"></div>
            </div>
          </div>
          <div className="fir_bl">
            <div className="img_bl">
              <img src="	https://navruzhotel.uz/_nuxt/img/suite-room.01e2e1a.png" alt="" />
            </div>
            <div className="text_bl">
            <h4>Standard Twin</h4>
            <div className="line_bl"></div>
            </div>
          </div>
          <div className="fir_bl">
            <div className="img_bl">
              <img src="	https://navruzhotel.uz/_nuxt/img/econom-room.4a937ff.png" alt="" />
            </div>
            <div className="text_bl">
            <h4>Standard Twin</h4>
            <div className="line_bl"></div>
            </div>
          </div>
          <div className="fir_bl">
            <div className="img_bl">
              <img src="https://navruzhotel.uz/_nuxt/img/superior-room.ed75c91.png" alt="" />
            </div>
            <div className="text_bl">
            <h4>Standard Twin</h4>
            <div className="line_bl"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="guests">
      <div className="text_gt">
        <h1>К услугам гостей</h1>
          <div className="line_gt"></div>
      </div>

      <div className="blocks_gt">
        <div className="line1">
        <div className="fir_bg">
          <h1>Ресторан</h1>
        </div>
        <div className="fir_bg2">
          <h1>Бар</h1>
        </div>
        <div className="fir_bg3">
          <h1>Конференц-залы</h1>
        </div>
        </div>
        <div className="line2">
        <div className="sec_bg">
          <h1>Бассейн</h1>
        </div>
        <div className="sec_bg2">
          <h1>Фитнес зал</h1>
        </div>
        <div className="sec_bg3">
          <h1>Бильярд</h1>
        </div>
        </div>
      </div>

      
      </div>
      <div className="guest_ab">
      <div className="text_gtab">
        <h1>Отзывы наших гостей</h1>
          <div className="line_gtab"></div>
      </div>
      <div className="carusel">
            <div className="block_car">
              <div className="up_car">
                <img src="https://navruzhotel.uz/_nuxt/img/review-svetlana.7710a1b.png" alt="" />
                <span>Светлана О.</span>
              </div>
              <div className="down_car">
                <span>Потрясающий отель с прекрасными удобствами и хорошим завтраком</span>
              </div>
            </div>
            <div className="block_car">
              <div className="up_car">
                <img src="https://navruzhotel.uz/_nuxt/img/review-svetlana.7710a1b.png" alt="" />
                <span>Светлана О.</span>
              </div>
              <div className="down_car">
                <span>Потрясающий отель с прекрасными удобствами и хорошим завтраком</span>
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
    </div>
  );
}


export default App;