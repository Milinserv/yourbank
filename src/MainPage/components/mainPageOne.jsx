import React from "react";
import './cssBody/mainPageOne.css';
import imgGirl from './img/0,-PhotoRoom 1.png';

function MainPageOne() {
    let def = <text className="col">обычных</text>
    let noDef = <text className="col">необычными</text>
    return (
        <div className="block">
            <div className="noUs">
                <h1>Для {def} людей с {noDef} мечтами</h1>
                <h3 className="p">Предложение с высокой вероятностью одобрения</h3>
            </div>
            <div className="img">
                <img src={imgGirl} />
            </div>
            <div>
                <button className="button">Подобрать кредит</button>
            </div>
        </div>

    );
}export default MainPageOne;