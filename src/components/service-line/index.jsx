import React from "react";
import ServiceLineItem from "./Service-line-item";
import './index.css'

const ServiceLine = () => {
    const ServiceList=[
        {
            name:"Mua thuốc",
            imgsrc:"./img/buymedicine.png",
            alt:"Mua thuốc",
        },
        {
            name:"Tư vấn",
            imgsrc:"./img/tuvan.png",
            alt:"Tư vấn bác sĩ",
        },
        {
            name:"Tiệm thuốc",
            imgsrc:"./img/location.png",
            alt:"Tiệm thuốc gần nhất",
        },
        {
            name:"Thiết bị",
            imgsrc:"./img/thietbi.png",
            alt:"Thiết bị y tế",
        },
        {
            name:"Kiểm tra",
            imgsrc:"./img/test.png",
            alt:"Test sức khoẻ ngay",
        },
        {
            name:"Mua thuốc",
            imgsrc:"./img/thietbi.png",
            alt:"Mua thuốc",
        }

    ]
    return<div className="ServiceLine-wrapper flex gap-3">
        {ServiceList.map((item,index)=>(
            <ServiceLineItem key={index} Servicename={item.name} imgsrc={item.imgsrc} description={item.alt} />
        ))}
    </div>
}
export default ServiceLine