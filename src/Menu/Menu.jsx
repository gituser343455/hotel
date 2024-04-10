import './Menu.css';


const Menu = () => {

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
        <img src="https://navruzhotel.uz/_nuxt/img/bg.92880d2.jpg" alt="" />
        </div>
        <div className="text_main">
            <h1>Меню</h1>
        </div>

        <div className="blocks_gt">
        <div className="line1">
        <div className="fir_bg">
          <h1>Салаты</h1>
        </div>
        <div className="fir_bg2">
          <h1>Холодные закуски</h1>
        </div>
        <div className="fir_bg3">
          <h1>Супы</h1>
        </div>
        </div>
        <div className="line2">
        <div className="sec_bg">
          <h1>Горячие блюда, Национальная кухня</h1>
        </div>
        <div className="sec_bg2">
          <h1>Рыба и морепродукты</h1>
        </div>
        <div className="sec_bg3">
          <h1>Мясо и птица</h1>
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

export default Menu;