import React from "react";
import MainPageOne from "./components/mainPageOne";
import MainPageAdvert from "./components/mainPageAdvert";
import MainPageQuestion from "./components/mainPageQuestion";
import BestOffers from "./components/bestOffers";
import Footer from "./components/footer";

function MainPage(){
    return(
        <div>
            <MainPageOne/>
            <MainPageAdvert/>
            <MainPageQuestion/>
            <BestOffers/>
            <Footer/>
        </div>
    )
}
export default MainPage;