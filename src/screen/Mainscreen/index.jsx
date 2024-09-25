import React from "react";
import BootstrapCarousel from "../../components/carouselCustom";
import BigNavigtion from "../../components/big-navigation";
import FirstProductSection from "../../components/first-product-section";

const MainScreen = () => {
    return(
        <div className="MainScreen-wrapper">
            <BootstrapCarousel/>
            <BigNavigtion/>
            <FirstProductSection/>
        </div>
    )
}
export default MainScreen