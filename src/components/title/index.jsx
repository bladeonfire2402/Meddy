import React from "react";
import './index.css'

const Title = ({title}) => {
    return(
        <div className="title-wrapper relative">
            <h2>{title}</h2>
            <div className="rounded-full p-2 absolute dot"></div>
            <img src="" alt="" className="absolute top-0 right-0"/>
        </div>
    )
}
export default Title