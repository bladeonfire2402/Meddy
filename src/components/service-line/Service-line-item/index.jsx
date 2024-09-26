import React from "react";
import './index.css'


const ServiceLineItem=({Servicename,imgsrc,description})=>{
    return<div className="ServiceLineItem-wrapper rounded bg-gradient-lightblue-to-lightgreen-top  flex items-center">
        <div className="rounded py-1 flex flex-col items-center bg-allwhite gap-1 ">
            <img className="mt-1" src={imgsrc} alt={description}/>
            <p className="text-lightblue mt-2">{Servicename}</p>
        </div>
    </div>
}
export default ServiceLineItem