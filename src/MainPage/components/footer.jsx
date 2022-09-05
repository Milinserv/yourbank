import React from "react";
import './cssBody/footer.css';
import map from './img/Снимок 1.png';

function Footer(){
    return(
        <div className="mFooter">
            <img className="map" src={map}/>
            <div className="inf">
                <p className="tel">500 бесплатно с мобильных на территории РФ</p>
                <p className="tel2">Звонок из-за границы</p>
                <p className="price">Стоимость звонка зависит от тарифа вашего мобильного оператора</p>
                <p className="terrain">Россия, Москва, 117997, ул. Вавилова, 19 © 1997—2022 ПАО Ваш.банк</p>
            </div>
        </div>
    )
}

export default Footer;