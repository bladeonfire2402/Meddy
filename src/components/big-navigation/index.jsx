import React from "react";
import './index.css'
import ServiceLine from "../service-line";
import GetDiscountBanner from "../getdiscountbanner";
const BigNavigtion = () => {
    return(
        <div className="BigNavigation-wrapper flex">
            <ServiceLine/>
            <GetDiscountBanner/>
        </div>
    )
}
export default BigNavigtion