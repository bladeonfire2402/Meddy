import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './index.css'

const Root = () => {
    return(
        <div className="big-wrapper">
            <Header/>
            <Footer/>
        </div>
    )
}
export default Root