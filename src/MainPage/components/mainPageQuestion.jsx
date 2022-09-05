import React from "react";
import './cssBody/mainPageQuestion.css';
import questGirl from './img/questGirl.png';

function MainPageQuestion(){
    return(
        <div className="diQuest">
            <div className="question">
                <img className="imgQuest" src={questGirl}/>
                <h1 className="quest1">Вопрос - ответ</h1>
                <p className="quest2">Ольга Мамедова</p>
                <p className="quest3">руководитель Департамента по работе с обращениями клиентов - вице-президент</p>
                <button className="askQ">Задать вопрос</button>
            </div>
        </div>
    )
}

export default MainPageQuestion;