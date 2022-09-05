import React from "react";
import './cssBody/bestOffers.css'
import card1 from './img/card1.png';
import card2 from './img/card2.png';
import card3 from './img/card3.png';
import card4 from './img/card4.png';

function BestOffers(){
    return(
        <div>
            <div className="offers">
                <h1 className="hOf">Лучшие предложения</h1>
                <div className="offerBut">
                    <button className="butOf">Финансы</button>
                    <button className="butOf">Пенсионерам</button>
                    <button className="butOf">Молодёжи</button>
                    <button className="butOf">Родителям и детям</button>
                </div>
            </div>
            <div className="offerCards">
                <div className="card1">
                    <h2 className="textH">Кредитная карта</h2>
                    <p className="textP">Пользуйтесь деньгами 120 дней без процентов. Обслуживание 0 ₽</p>
                    <img className="imgCard" src={card1}/>
                </div>
                <div className="card2">
                    <h2 className="textH">Дебетовая карта</h2>
                    <p className="textP">Бесплатное обслуживание, если получаете на карту зарплату, стипендию, пособия или пенсию</p>
                    <img className="imgCard" src={card2}/>
                </div>
                <div className="card3">
                    <h2 className="textH">Кредит на любые цели</h2>
                    <p className="textP">Самая низкая ставка в Ваш.банке за 10 лет – от 4,9% годовых</p>
                    <img className="imgCard" src={card3}/>
                </div>
                <div className="card4">
                    <h2 className="textH">Ваш.вклад</h2>
                    <p className="textP">Пополняйте в любой момент. Минимальная сумма — 100 000 ₽</p>
                    <img className="imgCard" src={card4}/>
                </div>
            </div>
        </div>
    )
}

export default BestOffers;