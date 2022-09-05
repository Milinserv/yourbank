import React from "react";
import './cssBody/mainPageAdvert.css';
import img1 from './img/af1.png';
import img2 from './img/image 2.png';
import img3 from './img/fcac1.png';

function MainPageAdvert(){
    let four = <text className="blue">4,9 %</text>;
    let min = <text className="blue">5 минут</text>;
    let four2 = <text className="blue">5,02%</text>
    let four3 = <text className="blue">30 000 ₽</text>
    let four4 = <text className="blue">15%</text>
    return(
        <div className="mainDiv">
            <div className="oneDiv">
                <img src={img1}/>
                <p className="lineBlock1">Кредит</p>
                <p className="lineBlockText">Оформите по рекордно низкой за 10 лет ставке</p>
                <p className="numbers1">от {four} ставка</p>
                <p className="numbers2">{min} без справок</p>
            </div>
            <div className="twoDiv">
                <img src={img2}/>
                <p className="lineBlock2">Вклад</p>
                <p className="lineBlockText">Можно снимать до минимального остатка без потери процентов</p>
                <p className="numbers11">до {four2} доходность в год</p>
                <p className="numbers22">от {four3}</p>
            </div>
            <div className="treeDiv">
                <img src={img3}/>
                <p className="lineBlock3">Ипотека</p>
                <p className="lineBlockText">Семейная ипотека, для многодетных семей</p>
                <p className="numbers11">до {four2} доходность в год</p>
                <p className="numbers22">от {four4} первый взнос</p>
            </div>
        </div>
    )
}
export default MainPageAdvert;