import React from "react";
import "./cssCredit/creditName.css";
import twoMan from './img/image 3.png';
import family from './img/image 4.png';
import painting from './img/image 5.png';
import stongs from './img/image 6.png';

const CreditOptions = () => {
    return(
        <div>
            <h1 className="creditName">Кредиты</h1>
            <div className="anyPur">
                <h1 className="h1Cre">Кредиты на любые цели</h1>
                <p className="pCre">・Выдача денег на карту за 1 минуту</p>
                <p className="pCre1">・Нужны только паспорт и анкета</p>
                <img className="imgCre" src={twoMan}/>
                <button className="butCre">Оформить онлайн</button>
                <a className="linkCre" href="">Подробнее</a>
            </div>
            <div className="refinan">
                <h1 className="h2Cre">Рефинансирование кредитов</h1>
                <p className="pCre">・Объедините несколько кредитов в один</p>
                <p className="pCre1">・Нужны только паспорт и анкета</p>
                <img className="imgCre" src={family}/>
                <button className="butCre">Оформить онлайн</button>
                <a className="linkCre" href="">Подробнее</a>
            </div>
            <div className="education">
                <h1 className="h3Cre">Кредит на образование с господдержкой</h1>
                <p className="pCre">・Низкая ставка 3% за счёт госсубсидий</p>
                <p className="pCre1">・Оформить можно с 14 лет</p>
                <img className="imgCre" src={painting}/>
                <button className="butCre">Оформить онлайн</button>
                <a className="linkCre" href="">Подробнее</a>
            </div>
            <div className="mentlan">
                <h1 className="h1Cre">Покупай в рассрочку</h1>
                <p className="pCre">・В интернете и офлайн-магазинах</p>
                <p className="pCre1">・Оформление за 2 минуты</p>
                <img className="imgCre" src={stongs}/>
                <button className="butCre">Оформить онлайн</button>
                <a className="linkCre" href="">Подробнее</a>
            </div>
        </div>
    )
}
export default CreditOptions;