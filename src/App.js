import React from "react";
import './VisualApp/App.css';
import './VisualApp/mainNav.css'
import MainPage from "./MainPage/mainPage";
import CreditPage from "./CreditPage/creditPage";
import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <header className="App">
        <div className="head">
            <nav>
                <a href="/credit">Кредиты</a>
                <a href="">Вклады</a>
                <a href="/" className="logo">ВАШ.БАНК</a>
                <a href="">Ипотека</a>
                <a href="">Поддержка</a>
            </nav>
        </div>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/credit" element={<CreditPage/>}/>
        </Routes>
    </header>
  );
}

export default App;