import React from "react";
import './index.css'
const ServiceLineItem=({Servicename,imgsrc,description})=>{
    return<div className="ServiceLineItem-wrapper rounded-xl">
        <div className="rounded-xl">
            <img src={imgsrc} alt={description}/>
            <p>{Servicename}</p>
        </div>
    </div>
}
export default ServiceLineItem