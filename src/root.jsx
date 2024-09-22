import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MainScreen from "./screen/Mainscreen";
import './index.css'

const Root = () => {
    return(
        <div className="big-wrapper">
            <Header/>
            <MainScreen/>
            <Footer/>
        </div>
    )
}
export default Root