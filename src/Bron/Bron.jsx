import './Bron.css';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Bron = () => {

    const [location, setLocation] = useState({ lat: 0, lng: 0 });
    useEffect(() => {
        const fetchLocation = async () => {
          try {
            const response = await fetch('https://ipinfo.io/json?token=82.215.73.220');
            if (!response.ok) {
              throw new Error('Failed to fetch location');
            }
            const data = await response.json();
            const [lat, lng] = data.loc.split(',').map(parseFloat);
            setLocation({ lat, lng });
          } catch (error) {
            console.error('Error fetching location:', error);
          }
        };
    
        fetchLocation();
      }, []);
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
        <img src="https://navruzhotel.uz/_nuxt/img/bg.818f631.jpg" alt="" />
        </div>

        <div className="rule">
            <h1>Правила заселения</h1>
            <ul>
                <li>- Заезд 14:00 Выезд 12:00</li>
                <li>- Ранний заезд с 06:00 +50% от стоимости номера</li>
                <li>- Заезд до 06:00 тарифицируется 100% от стоимости номера</li>
                <li>- Поздний выезд до 18:00 +50% от стоимости номера </li>
                <li>- Выезд после 18:00 тарифицируется 100% от стоимости номера</li>
            </ul>
        </div>
        <div className="pay">
            <h1>Оплата</h1>
            <ul>
                <li>Узбекский сум</li>
            </ul>
        </div>
        <div className="card">
            <h1> Принимаются карты </h1>
            <ul>
                <li>UzCard,</li>
                <li>Humo, </li>
                <li>MasterCard,</li>
                <li>Visa,</li>
                <li>China Union Pay,</li>
                <li>Maestro,</li>
                <li>Карты России.</li>
            </ul>
            <span>Оплата в рублях через Paygine</span>
        </div>

        <div className="cart">
          <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: '400px', width: '900px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <Marker position={[location.lat, location.lng]}>
        <Popup>You are here</Popup>
        </Marker>
        </MapContainer>
      </div>
        </div>
    );
}

export default Bron