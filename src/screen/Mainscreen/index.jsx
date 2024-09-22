import React from "react";
import BootstrapCarousel from "../../components/carouselCustom";
import BigNavigtion from "../../components/big-navigation";

const MainScreen = () => {
    return(
        <div className="MainScreen-wrapper">
            <BootstrapCarousel/>
            <BigNavigtion/>
        </div>
    )
}
export default MainScreen